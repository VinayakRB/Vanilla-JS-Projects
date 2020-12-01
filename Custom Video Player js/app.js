//HTMLMediaElement
//initialize variables
const video = document.querySelector('video');
const playButton = document.querySelector('.toggle');
const rangeSlider = document.querySelectorAll('input[type="range"]');
const timeBtns = document.querySelectorAll('.player__button[data-skip]');
const progress = document.querySelector('.progress__filled');
const progressSlider = document.querySelector('.progress');
const fullscreen = document.querySelector('.fullscreen');

/* controls and functions */ 

//play-pause
function togglePlay() {
  video.paused ? video.play() : video.pause();
};
function updateButton() {
  const icon = video.paused ? '▶' : '❚❚';
  playButton.textContent = icon;
};
//volume and playback range adjust
let mouseDownRange = false;
function updateRange(e) {
  const event = e.target;
  video[event.name] = Number.parseFloat(event.value);
};
//time forward/skip
function timeSkip() {
  video.currentTime += Number.parseFloat(this.dataset.skip);
};
//update slider
function updateProgress() {
  const percentage = `${video.currentTime / video.duration * 100}%`;
  progress.style.flexBasis = `${percentage}`;
  if(video.currentTime >= video.duration) {
    resetPlayer();
  };
};
//progress slider
let mouseDownProgress = false;
function updateSlider(e) {
  const percent = (e.offsetX / this.clientWidth) * video.duration;
  video.currentTime = percent;
};
//reset video and progress bar
function resetPlayer() {
  progress.style.flexBasis = `0%`;
  video.pause();
  video.currentTime = 0; 
  togglePlay = false;
};
//fullScreen toggle
function toggleFullscreen() {
  video.fullscreen ? video.exitFullscreen() : video.requestFullscreen();
}

/* event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', updateProgress);
playButton.addEventListener('click', togglePlay);
rangeSlider.forEach(range => {
  range.addEventListener('change', updateRange);
  range.addEventListener('mousedown', () => mouseDownRange = true);
  range.addEventListener('mouseup', () => mouseDownRange = false);
  range.addEventListener('mousemove', (e) => mouseDownRange && updateRange(e));
})
timeBtns.forEach(button => {
  button.addEventListener('click', timeSkip);
});
progressSlider.addEventListener('click', updateSlider);
progressSlider.addEventListener('mousedown', () => mouseDownProgress = true);
progressSlider.addEventListener('mouseup', () => mouseDownProgress = false);
progressSlider.addEventListener('mousemove', function(e) {
  mouseDownProgress && updateSlider.call(this, e);
});
fullscreen.addEventListener('click', toggleFullscreen);


