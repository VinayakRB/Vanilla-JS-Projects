import Tooltip from './project ui/tooltip';
import Dropdown from './project ui/dropdown';
import Tabs from './project ui/tabs';
import Snackbar from './project ui/snackbar';

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();


const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

const snackbar = new Snackbar();
snackbar.init();

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  snackbar.show('You clicked me :)');
});