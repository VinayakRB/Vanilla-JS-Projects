const panels = Array.from(document.querySelector('.panels').children);

class Gallery {
  constructor() {}

  togglePanel() {
      this.classList.toggle('open');
  }

  toggleText(e) {
    if(e.propertyName === 'flex-grow' && this.classList.contains('open')) {
      this.classList.toggle('open-active');
    } else if(e.propertyName === 'flex-grow' && this.classList.contains('open-active')) {
      this.classList.toggle('open-active');
    }
  }

  onHover() {
    panels.forEach(panel => {
      panel.addEventListener('mouseenter', function() {
        this.classList.add('open');
      });
      panel.addEventListener('transitionend', this.toggleText);
      panel.addEventListener('mouseleave', function() {
        this.classList.remove('open', 'open-active');
      });
    });
  }

  onClick() {
    panels.forEach(panel => {
      panel.addEventListener('click', this.togglePanel);
      panel.addEventListener('transitionend', this.toggleText);
    });
  }
}

const obj = new Gallery();
obj.onClick();
// obj.onHover();