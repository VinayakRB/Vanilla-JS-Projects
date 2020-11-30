//HTMLMediaElement
const video = document.querySelector('video');

//play-pause
const playButton = document.querySelector('.toggle');
let togglePlay = false;
function playVideo() {
  togglePlay = true;
  video.play();
}
function pauseVideo() {
  togglePlay = false;
  video.pause();
}
playButton.addEventListener('click', () => {
  !togglePlay ? playVideo() : pauseVideo();
});
video.addEventListener('click', () => {
  !togglePlay ? playVideo() : pauseVideo();
})

//volume adjust
const volumeSlider = document.querySelector('input[name="volume"]');
function adjustVolume() {
  video.volume = this.value;
}
volumeSlider.addEventListener('change', adjustVolume);
volumeSlider.addEventListener('mousemove', adjustVolume);

//playBack rate adjust
const playBack = document.querySelector('input[name="playbackRate"]');
function adjustPlayBack() {
  video.playbackRate = this.value;
}
playBack.addEventListener('change', adjustPlayBack);
playBack.addEventListener('mousemove', adjustPlayBack);

//time forward/skip
const timeBtns = document.querySelectorAll('.player__button[data-skip]');
function timeSkip() {
  video.currentTime += Number(this.getAttribute('data-skip'));
}
timeBtns.forEach(button => {
  button.addEventListener('click', timeSkip);
});

//update slider
const progress = document.querySelector('.progress__filled');
function updateProgress() {
  const percentage = `${video.currentTime / video.duration * 100}%`;
  progress.style.flexBasis = `${percentage}`;
  if(video.currentTime >= video.duration) {
    resetPlayer();
  };
}
video.addEventListener('timeupdate', updateProgress);
progress.style.flexBasis = `0%`;

//reset video and progress bar
function resetPlayer() {
  progress.style.flexBasis = `0%`;
  video.pause();
  video.currentTime = 0; 
  togglePlay = false;
}
