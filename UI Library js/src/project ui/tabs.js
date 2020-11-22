import './styles/tabs.css';

class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll(`.trigger`);
  }
  init() {
    this.tabs.forEach(tab => {
      tab.addEventListener(`click`, e => {
        this.toggleTabs(e);
        this.toggleContent(e);
      });
    });
  }
  toggleTabs(e) {
    //remove active
    this.tabs.forEach(tab => tab.classList.remove('active'));
    //add new active class
    e.target.classList.add('active');
  }
  toggleContent(e) {
    //remove active
    this.container.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
    
    //add new active class
    const selector = e.target.getAttribute('data-target');
    const content = this.container.querySelector(selector);
    content.classList.add('active');
  }
};

export {Tabs as default};