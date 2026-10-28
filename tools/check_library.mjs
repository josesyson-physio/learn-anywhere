// Checks that every file in library/ is plain data, so a content pull request can't hide code.
// Allowed top-level statements (nothing else):
//   window.NAME = <data>;
//   window.NAME = (window.NAME || []).concat(<data>);
//   window.NAME = Object.assign((window.NAME || {}), <data>);
// <data> is objects, arrays, strings, numbers, true/false/null. No functions, calls, variables,
// template expressions, spreads, computed keys or getters. Strings may not start with javascript:, data: or vbscript:.
// Run: node tools/check_library.mjs   (needs acorn: npm install --no-save acorn@8.14.0)
import { readFileSync, readdirSync } from "node:fs";
import { parse } from "acorn";

const NAMES = new Set(["LIB_EXTRA", "RELATE", "BOOKS", "COURSE_MAPS", "FREE_READS", "MGR_BPT", "SHELF_EXTRA", "SYLLABUS"]);
const BAD_URL = /^\s*(javascript|data|vbscript):/i;
let failed = 0;

function data(n, f){
  switch (n.type) {
    case "Literal":
      if (n.regex || typeof n.value === "bigint") throw at(n, "only plain values are allowed");
      if (typeof n.value === "string" && BAD_URL.test(n.value)) throw at(n, "unsafe link address");
      return;
    case "TemplateLiteral":
      if (n.expressions.length) throw at(n, "template strings can't contain ${...}");
      if (n.quasis.some(q => BAD_URL.test(q.value.cooked))) throw at(n, "unsafe link address");
      return;
    case "UnaryExpression":
      if (n.operator === "-" && n.argument.type === "Literal" && typeof n.argument.value === "number") return;
      throw at(n, "only plain values are allowed");
    case "ArrayExpression":
      for (const e of n.elements) { if (!e) continue; data(e, f); }
      return;
    case "ObjectExpression":
      for (const p of n.properties) {
        if (p.type !== "Property" || p.kind !== "init" || p.method || p.computed || p.shorthand) throw at(p, "object entries must be plain key: value pairs");
        if (!["Identifier", "Literal"].includes(p.key.type)) throw at(p, "object keys must be names or strings");
        if ((p.key.name ?? p.key.value) === "__proto__") throw at(p, "__proto__ is not allowed");
        data(p.value, f);
      }
      return;
    default:
      throw at(n, `${n.type} is not allowed in library files`);
  }
}
const at = (n, msg) => Object.assign(new Error(msg), { pos: n.loc.start });
const isWin = (n, name) => n.type === "MemberExpression" && !n.computed && n.object.type === "Identifier" && n.object.name === "window" && n.property.type === "Identifier" && (!name || n.property.name === name);
const isFallback = (n, name, empty) => n.type === "LogicalExpression" && n.operator === "||" && isWin(n.left, name) && n.right.type === empty && !(n.right.elements || n.right.properties).length;

function statement(s, f){
  const e = s.expression;
  if (s.type !== "ExpressionStatement" || e.type !== "AssignmentExpression" || e.operator !== "=" || !isWin(e.left)) throw at(s, "each statement must be window.NAME = ...");
  const name = e.left.property.name, r = e.right;
  if (!NAMES.has(name)) throw at(s, `window.${name} is not a known library name (add it to tools/check_library.mjs if it is meant to be)`);
  if (isFallback(r, name, "ArrayExpression")) return;
  if (r.type === "CallExpression" && r.callee.type === "MemberExpression" && !r.callee.computed && r.callee.property.name === "concat" && isFallback(r.callee.object, name, "ArrayExpression") && r.arguments.length === 1) return data(r.arguments[0], f);
  if (r.type === "CallExpression" && r.callee.type === "MemberExpression" && !r.callee.computed && r.callee.object.type === "Identifier" && r.callee.object.name === "Object" && r.callee.property.name === "assign" && r.arguments.length === 2 && isFallback(r.arguments[0], name, "ObjectExpression")) return data(r.arguments[1], f);
  data(r, f);
}

for (const name of readdirSync("library").sort()) {
  const f = "library/" + name;
  try {
    if (!name.endsWith(".js")) throw Object.assign(new Error("only .js data files belong in library/"), { pos: { line: 1, column: 0 } });
    const ast = parse(readFileSync(f, "utf8"), { ecmaVersion: 2022, sourceType: "script", locations: true });
    for (const s of ast.body) statement(s, f);
  } catch (err) {
    failed++;
    const pos = err.pos || err.loc || { line: 0, column: 0 };
    console.log(`::error file=${f},line=${pos.line},col=${pos.column + 1}::${err.message}`);
  }
}
if (failed) { console.log(`${failed} library file(s) contain something other than plain data.`); process.exit(1); }
console.log("All library files are plain data.");
