import Tooltip from './project ui/tooltip';
import Dropdown from './project ui/dropdown';

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();


const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});