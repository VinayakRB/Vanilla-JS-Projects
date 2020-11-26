//get elements
const audio = document.querySelectorAll('audio');
const keys = document.querySelectorAll('.audio-tile');

function playSound(e) {
  audio.forEach(avf => {
    if(e.keyCode == avf.getAttribute('data-code')) {
      avf.currentTime = 0; //starting from 0
      avf.play(); // play this audio
      avf.parentElement.classList.add('playing'); 
      //add playing class to change style
    }
    else return;
  });
}

function removeTransition(e) {
  if(e.propertyName != 'transform') return;
  else {
    this.classList.remove('playing'); 
    //remove class after transition is complete 
  }
}

document.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));