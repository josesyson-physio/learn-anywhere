"""Build library/mgr-map.js: the Dr. MGR BPT syllabus with each topic linked to a library topic id.

Input: syllabus/mgr-bpt.json (extracted from the university's BPT regulations) and
syllabus/mgr-gaps.json (hand-checked mapping for the physiotherapy papers).
Run: python3 tools/build_mgr_map.py <dir with the json files>
"""
import json, re, sys, os

src = sys.argv[1] if len(sys.argv) > 1 else "/mnt/project-files/syllabus"
bpt = json.load(open(os.path.join(src, "mgr-bpt.json")))
gaps = json.load(open(os.path.join(src, "mgr-gaps.json")))
known = {(g["paper"].lower(), g["topic"].lower()): g["covered"] for g in gaps if g.get("covered")}
by_topic = {g["topic"].lower(): g["covered"] for g in gaps if g.get("covered")}

# Topic text -> library id, for topics written after the gap list was made (checked in order)
RULES = [
    (r"short wave|shortwave|\bswd\b", "swd"), (r"faradic", "faradic"), (r"galvanic|denervated", "galvanic-ids"),
    (r"strength.duration|rheobase|chronaxie", "sd-curve"), (r"ultraviolet|\buvr\b|puva", "uvr"),
    (r"infrared|\birr\b", "irr"), (r"laser", "laser"), (r"iontophoresis", "iontophoresis"),
    (r"cryotherapy|contrast bath|ice massage", "cryotherapy"), (r"wax", "wax-bath"),
    (r"massage|effleurage|petrissage|kneading|friction massage", "massage"), (r"\btraction\b", "traction"),
    (r"\bstretch(ing|es)?\b", "stretching"), (r"frenkel|coordination", "coordination"), (r"balance", "balance-training"),
    (r"breathing|pursed lip", "breathing-exercises"), (r"\bcrutch(es)?\b(?! palsy)|\bcanes?\b|\bwalkers?\b|walking aid|ambulatory aid", "crutch-gait"),
    (r"suspension", "suspension"), (r"hydrotherapy|hubbard|whirlpool|pool", "hydrotherapy"),
    (r"patholog\w* gait|gait biomech", "pathological-gaits"),
    (r"colles", "colles-fracture"), (r"clavicle|humerus", "upper-limb-fractures"), (r"scaphoid", "scaphoid-fracture"),
    (r"pott'?s fracture", "potts-fracture"), (r"spinal fracture|fracture.*spine", "spinal-fracture"),
    (r"shoulder dislocation|recurrent shoulder|anterior and recurrent", "shoulder-dislocation"),
    (r"tb spine|tuberculosis of (the )?spine|pott'?s spine|pott'?s disease", "tb-spine"),
    (r"spondylolisthesis|spondylolysis", "spondylolisthesis"), (r"polio", "polio-residual"),
    (r"achilles", "achilles-rupture"), (r"general fracture|fracture management|fracture healing|fracture rehab", "general-fracture"),
    (r"bobath|\bndt\b|neurodevelopmental", "ndt-bobath"), (r"spastic", "spasticity"),
    (r"cerebell|ataxia", "cerebellar-ataxia"), (r"motor neuron", "mnd"), (r"myasthenia", "myasthenia"),
    (r"spina bifida|hydrocephalus|dysraphism", "spina-bifida"), (r"bronchiectasis", "bronchiectasis"),
    (r"asthma", "asthma"), (r"heart failure|cardiac failure", "heart-failure"), (r"orthos|orthotic|splints and braces", "orthotics"),
    (r"muscle contraction|sliding filament|motor unit", "muscle-physiology"), (r"goniometr", "goniometry"),
    (r"manual muscle|muscle testing|\bmmt\b", "mmt"), (r"\bpnf\b|proprioceptive neuromuscular", "pnf"),
    (r"\btens\b|transcutaneous", "tens"), (r"interferential|\bift\b", "ift"), (r"ultrasound|phonophoresis", "ultrasound"),
    (r"normal gait|gait cycle", "gait-cycle"), (r"shoulder complex|scapulohumeral", "shoulder-biomechanics"),
    (r"resisted exercise|progressive resist|delorme", "pre"), (r"mobili[sz]ation", "maitland-grades"),
    (r"amputat|prosthe", "amputation"), (r"\bburns?\b", "burns"), (r"community.based|\bcbr\b", "cbr"),
    (r"milestone|developmental delay", "milestones"), (r"research|statistic|sampling", "research-methods"),
    (r"evidence.based", "levels-evidence"), (r"\bicf\b|documentation", "icf-soap"),
    (r"pelvic floor|incontinence", "pelvic-floor"), (r"antenatal|postnatal|pregnan", "antenatal-postnatal"),
    (r"\bicu\b|intensive care|mechanical ventilation|ventilat", "icu"), (r"head injur|brain injur", "tbi"),
    (r"motor (re)?learning|motor relearning|carr and shepherd", "motor-learning"), (r"diabet", "diabetes-exercise"),
    (r"exercise prescription|fitt", "fitt"), (r"pain science|chronic pain", "pain-science"),
    (r"brunnstrom", "brunnstrom"), (r"stroke|hemipleg", "stroke"), (r"parkinson", "parkinsons"),
    (r"spinal cord injur|parapleg|quadripleg|tetrapleg", "sci"), (r"guillain|\bgbs\b", "gbs"),
    (r"multiple sclerosis", "ms"), (r"facial palsy|bell", "bells-palsy"),
    (r"peripheral nerve|brachial plexus|erb|nerve injur", "brachial-plexus"), (r"cerebral palsy", "cp"),
    (r"muscular dystrophy|duchenne", "dmd"), (r"ctev|club ?foot|talipes", "ctev"), (r"copd|chronic obstructive|emphysema|chronic bronchitis", "copd"),
    (r"cardiac rehab|myocardial|cabg|coronary", "cardiac-rehab"), (r"postural drainage|airway clearance|acbt", "airway-clearance"),
    (r"thoracotomy|post.?operative|abdominal surgery", "postop-chest"), (r"\bfalls?\b", "falls"), (r"osteoporo", "osteoporosis"),
    (r"total knee|knee replacement|\btkr\b", "tkr"), (r"total hip|hip replacement|\bthr\b", "thr"),
    (r"rheumatoid", "rheumatoid-arthritis"), (r"ankylosing", "ankylosing-spondylitis"), (r"scoliosis", "scoliosis"),
    (r"cervical spondylosis|cervical radic", "cervical-radiculopathy"), (r"disc prolapse|\bpivd\b|sciatica|disc lesion", "lumbar-disc"),
    (r"low back|lumbar spondylosis", "lbp"), (r"frozen shoulder|periarthritis|adhesive capsulitis", "frozen-shoulder"),
    (r"osteoarthritis", "knee-oa"), (r"\bacl\b|cruciate|knee ligament", "acl"), (r"tennis elbow|lateral epicondyl", "tennis-elbow"),
    (r"carpal tunnel", "carpal-tunnel"), (r"plantar fasci|heel", "plantar-heel-pain"), (r"ankle sprain", "ankle-sprain"),
    (r"supraspinatus|rotator cuff|impingement", "subacromial-pain"), (r"hamstring", "hamstring"), (r"flexor tendon|tendon repair", "flexor-tendon"),
    (r"chondromalacia|patellofemoral", "pfps"), (r"mobility aid|wheelchair", "crutch-gait"),
]

PHYSIO = ("exercise therapy", "electrotherapy", "pt in", "rehabilitation", "biomechanics", "physical modalities")
TECHNIQUE = {"balance-training", "massage", "stretching", "traction", "crutch-gait", "coordination", "breathing-exercises", "hydrotherapy", "suspension", "polio-residual"}

# Hand-checked corrections where a keyword would pick the wrong topic (matched on the start of the text)
OVERRIDE = {"cns infections": None, "craniovertebral anomalies": None, "principles: positioning, fixation": "maitland-grades",
            "basic procedures: traction, approximation": "pnf"}

def link(paper, topic):
    physio = paper.lower().startswith(PHYSIO)
    for k, v in OVERRIDE.items():
        if topic.lower().startswith(k):
            return v
    t = topic.lower()
    hit = known.get((paper.lower(), t)) or by_topic.get(t)
    if hit:
        return hit
    for rx, tid in RULES:
        if tid in TECHNIQUE and not physio:
            continue
        if re.search(rx, t):
            return tid
    return None

years = []
for y in bpt["years"]:
    subs = []
    for s in y["subjects"]:
        units = [{"t": u.get("title", ""), "k": [[tp, link(s["name"], tp)] for tp in u.get("topics", [])]} for u in s.get("units", [])]
        subs.append({"n": s["name"], "e": bool(s.get("examined", True)), "h": s.get("hours"), "u": units})
    years.append({"y": y["year"], "s": subs})

out = {"university": bpt.get("university"), "course": "BPT", "regulation": bpt.get("regulation"),
       "pattern": bpt.get("examPattern"), "years": years}
dest = os.path.join(os.path.dirname(__file__), "..", "library", "mgr-map.js")
with open(dest, "w") as f:
    f.write("// Dr. MGR Medical University BPT syllabus (regulations 2017-18 onwards; revised Jan 2022), topic by topic.\n")
    f.write("// Generated by tools/build_mgr_map.py. Each topic is [syllabus text, library topic id or null].\n")
    f.write("window.MGR_BPT = " + json.dumps(out, ensure_ascii=True, separators=(",", ":")) + ";\n")
tot = sum(len(u["k"]) for y in years for s in y["s"] for u in s["u"])
cov = sum(1 for y in years for s in y["s"] for u in s["u"] for k in u["k"] if k[1])
print("topics", tot, "linked", cov)
