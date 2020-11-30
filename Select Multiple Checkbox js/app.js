const inbox = document.querySelectorAll('.inbox input[type="checkbox"]');
let inBetween = false;
let lastChecked;

function handleChange(e) {
  //check if shift key is pressed and if this input is checked
  if(e.shiftKey && this.checked) {
    inbox.forEach(input => {
      if(input === lastChecked || this === input){
        //toggle inBetween flag
        inBetween = !inBetween;
      }
      if(inBetween) {
        input.checked = true;
      }
    });
  }
  //set last checked for iterating
  lastChecked = this;
}

inbox.forEach(input => {
  input.addEventListener('click', handleChange);
})
