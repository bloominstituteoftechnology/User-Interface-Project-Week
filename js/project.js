class Project {
  constructor(element) {
    this.element = element;
    let buttons = document.querySelectorAll(".project-button");
    this.buttons = Array.from(buttons).map(buttons => {
      return new ProjectButton(buttons);
    });
    this.selectedButton = this.buttons[0].element;
    this.selectedButton.classList.add("project-showing");
    this.selectedProject = this.buttons[0].projectItem.element;
    this.selectedProject.classList.add("project-showing");
  }
}

class ProjectButton {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.project;
    this.itemElement = document.querySelector(
      `.project[data-project="${this.data}"]`
    );
    this.projectItem = new ProjectItem(this.itemElement);
    this.element.addEventListener("click", () => this.select());
  }

  select() {
    this.deselect(project.selectedButton);
    this.projectItem.deselect(project.selectedProject);
    project.selectedButton = this.element;
    project.selectedProject = this.projectItem.element;
    this.element.classList.add("project-showing");
    this.projectItem.select();
  }

  deselect(link) {
    link.classList.remove("project-showing");
  }
}

class ProjectItem {
  constructor(element) {
    this.element = element;
    this.title = this.element.querySelector(".title");
    this.contact = this.element.querySelector(".contact");
    this.para1 = this.element.querySelector(".para1");
    this.para2 = this.element.querySelector(".para2");
    this.price = this.element.querySelector(".price");
    this.features = this.element.querySelector(".features");
  }

  select() {
    this.element.classList.add("project-showing");
  }

  deselect(item) {
    item.classList.remove("project-showing");
  }
}

const project = new Project(document.querySelector(".project-content"));
