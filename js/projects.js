class ProjectLink{
  constructor(element){
    this.element = element;

    this.tabData = this.element.dataset.tab;

    //   backticks  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    this.projects = document.querySelectorAll(`.project[data-tab = "${this.tabData}"]`);

    this.projects = Array.from(this.projects).map(item => new TabProject(item));

    this.element.addEventListener('click', () => this.selectProjectTab());

  }

  selectProjectTab(){
    const tabs = document.querySelectorAll('.project_tab');

    tabs.forEach(item => item.classList.remove('active-tab'));

    this.element.classList.add('active-tab');


    const projects = document.querySelectorAll('.project');

    projects.forEach(item => item.style = 'display: none');

    this.projects.forEach(service => service.selectProject());

  }
}

class TabProject{
  constructor(element){
    this.element = element;
  }

  selectProject(){
    this.element.style = 'display: null';
  }
}

let tabs = document.querySelectorAll('.project_tab');

tabs = Array.from(tabs).map(item => new ProjectLink(item));

tabs[0].selectProjectTab();