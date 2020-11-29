const panels = Array.from(document.querySelector('.panels').children);
// console.log(panels);
function toggleText(e) {
  if(e.propertyName === 'flex-grow' && this.classList.contains('open')) {
    this.classList.toggle('open-active');
  } else if(e.propertyName === 'flex-grow') {
    this.classList.toggle('open-active');
  }
}

function togglePanel() {
  this.classList.toggle('open');
}

//On Hover
// panels.forEach(panel => {
//   panel.addEventListener('mouseenter', function() {
//     this.classList.add('open');
//   });
//   panel.addEventListener('transitionend', toggleText);
//   panel.addEventListener('mouseleave', function() {
//     this.classList.remove('open', 'open-active');
//   });
// });

//On Click and transition end
panels.forEach(panel => {
  panel.addEventListener('click', togglePanel);
  panel.addEventListener('transitionend', toggleText);
})