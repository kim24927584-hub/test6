const nav = document.querySelector(".site-nav");
function updateNav(){
  if(!nav) return;
  nav.classList.toggle("is-scrolled",window.scrollY > 40);
}

updateNav();
window.addEventListener("scroll",updateNav);