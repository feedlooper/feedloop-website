// Small helper: highlight active nav link
(function(){
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(a=>{
    const href = a.getAttribute("href");
    if(href === path){
      a.style.background = "rgba(255,255,255,.06)";
      a.style.color = "var(--text)";
      a.style.border = "1px solid rgba(99,177,15,.35)";
    }
  });
})();