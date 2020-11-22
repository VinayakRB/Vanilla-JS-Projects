import Tooltip from './project ui/tooltip';
import Dropdown from './project ui/dropdown';
import Tabs from './project ui/tabs';

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();


const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});


const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();