const audio = document.querySelectorAll('audio');
const keys = document.querySelectorAll('.audio-tile');

function playSound(e) {
  audio.forEach(avf => {
    if(e.keyCode == avf.getAttribute('data-code')) {
      avf.parentElement.classList.add('playing');
    }
    else return;
  });
}

function removeTransition(e) {
  if(e.propertyName != 'transform') return;
  else {
    this.classList.remove('playing');
  }
}

document.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));