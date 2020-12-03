const nav = document.querySelector('nav');
const topOfNav = nav.offsetTop;

function stickNav() {
  if(window.scrollY >= topOfNav) {
    document.body.classList.add('nav-active');
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
  } else {
    document.body.classList.remove('nav-active');
    document.body.style.paddingTop = `0px`;
  }
}

window.addEventListener('scroll', stickNav);