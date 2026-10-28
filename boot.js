// Runs before the page paints: applies saved reading settings and the active profile.
try{if(localStorage.getItem("la-eink")==="1")document.documentElement.setAttribute("data-eink","");var t=localStorage.getItem("la-text");if(t==="l"||t==="xl")document.documentElement.dataset.text=t}catch(e){}
try{window.LA_PROFILE=localStorage.getItem("la-active")||sessionStorage.getItem("la-active-s")||null}catch(e){}
try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches&&!document.documentElement.hasAttribute("data-eink"))document.documentElement.classList.add("motion")}catch(e){}
// Never run inside another site's frame (stops clickjacking, since GitHub Pages can't send frame-ancestors)
if(window.top!==window.self){document.documentElement.style.display="none";try{window.top.location.replace(window.self.location.href)}catch(e){}}
