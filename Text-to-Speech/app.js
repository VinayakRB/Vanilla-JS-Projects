//initialize DOM elements and variables
const voicesDropdown = document.querySelector('#voices');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const stopBtn = document.querySelector('#stop');
const startBtn = document.querySelector('#speak');
let voices = [];

//speechsynthesis object
const speech = new SpeechSynthesisUtterance();
speech.text = document.querySelector('[name="text"]').value;

//functions
function stackVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .map(voice => {
      return `
        <option value="${voice.name}">
          ${voice.name} ${voice.lang}
        </option>`
  })
  .join('');
}

function updateVoice() {
  speech.voice = voices.find(voice => voice.name === this.value);
  toggleSpeak();
}

function toggleSpeak(flag = true) {
  speechSynthesis.cancel();
  flag && speechSynthesis.speak(speech);
}

function updateOptions() {
  speech[this.name] = this.value;
  toggleSpeak();
}

//event listeners
speechSynthesis.addEventListener('voiceschanged', stackVoices);
voicesDropdown.addEventListener('change', updateVoice);
options.forEach(option => {option.addEventListener('change', updateOptions)});
stopBtn.addEventListener('click', toggleSpeak.bind(null, false));
startBtn.addEventListener('click', toggleSpeak.bind(null, true));

