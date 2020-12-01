const hero = document.querySelector(`.hero`);
const text = document.querySelector(`h1`);
const shadow = 20;

function shadowEffect(e) {
  const {offsetWidth: width, offsetHeight: height} = hero;
  let {offsetX: x, offsetY: y} = e;
  if(this != e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }
  const shadowX = (x / width * shadow) - (shadow / 2);
  const shadowY = (y / height * shadow) - (shadow / 2);
  text.style.textShadow = `${shadowX}px ${shadowY}px 0  rgba(0, 0, 0, 0.349)`;
}

hero.addEventListener('mousemove', shadowEffect);
