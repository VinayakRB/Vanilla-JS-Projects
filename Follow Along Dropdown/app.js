const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  this.classList.add('hovered');
  setTimeout(() => this.classList.contains('hovered') && this.classList.add('hover-active'), 150);
  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  const listCords = dropdown.getBoundingClientRect();
  const navCords = nav.getBoundingClientRect();
  const backgroundCords = {
    width: listCords.width,
    height: listCords.height,
    x: listCords.x - navCords.x,
    y: listCords.y - navCords.y
  }
  background.style = `
  width: ${backgroundCords.width}px;
  height: ${backgroundCords.height}px;
  transform: translate(${backgroundCords.x}px, ${backgroundCords.y}px);
  `;
}
function handleLeave() {
  this.classList.remove('hovered', 'hover-active');
  background.classList.remove('open');
}
triggers.forEach(trigger => {
  trigger.addEventListener('mouseenter', handleEnter);
  trigger.addEventListener('mouseleave', handleLeave);
});
