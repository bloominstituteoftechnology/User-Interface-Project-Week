const timeline = new TimelineMax();

class Project {
  constructor(element) {
    this.element = element;
    this.left = document.querySelector(".left-button");
    this.right = document.querySelector(".right-button");

    this.projects = document.querySelectorAll(".project");

    this.left.addEventListener('click', () => { this.leftClick() });
    this.right.addEventListener('click', () => { this.rightClick() });    
  }
  rightClick() {
    const projects = Array.from(this.projects);

    let currentProject;
    for(let i = 0; i < projects.length; i++) {
      if(projects[i].className.includes('display')) {
        currentProject = this.projects[i];
      }
    }
    if(currentProject === this.projects[this.projects.length -1]) {

      timeline.fromTo(currentProject, 1, { x:"0%", opacity: 1}, { ease: Power1.easeOut, x: "-150%", opacity: 0, onComplete: () => {
        currentProject.classList.remove("display");
        this.projects[0].classList.add("display");
        TweenMax.fromTo(".project", 0.7, {x:"100%", opacity: 0}, {ease: Power1.easeOut, x: "0%", opacity: 1});
      }});
      

    } else {
      for(let i = 0; i < this.projects.length; i++) {
        if (currentProject === this.projects[i]){

          timeline.fromTo(this.projects[i], 1, { x:"0%", opacity: 1}, { ease: Power1.easeOut, x: "-150%", opacity: 0, onComplete: () => {
            currentProject.classList.remove("display");
            this.projects[i+1].classList.add("display");
            timeline.fromTo(".project", 0.7, {x:"100%", opacity: 0}, {ease: Power1.easeOut,x: "0%", opacity:1});
          }})

        }
      }

    }


  }

  leftClick() {
    const projects = Array.from(this.projects);

    let currentProject;
    for(let i = 0; i < projects.length; i++) {
      if(projects[i].className.includes('display')) {
        currentProject = this.projects[i];
      }
    }

    if(currentProject === this.projects[0]) {

      timeline.fromTo(currentProject, 1, { x:"0%", opacity: 1}, { ease: Power1.easeOut, x: "150%", opacity: 0, onComplete: () => {
        currentProject.classList.remove("display");
        this.projects[this.projects.length-1].classList.add("display");
        TweenMax.fromTo(".project", 0.7, {x:"-100%", opacity: 0}, {ease: Power1.easeOut, x: "0%", opacity: 1});
      }});
      
    } else {
      for(let i = 0; i < this.projects.length; i++) {
        if (currentProject === this.projects[i]){
 
          timeline.fromTo(currentProject, 1, { x:"0%", opacity: 1}, { ease: Power1.easeOut, x: "150%", opacity: 0, onComplete: () => {
           currentProject.classList.remove("display");
           this.projects[i-1].classList.add("display");
           TweenMax.fromTo(".project", 0.7, {x:"-100%", opacity: 0}, {ease: Power1.easeOut, x: "0%", opacity: 1});
         }})
       }
     }

    }

  }

}



let projects = document.querySelectorAll(".projects");
projects = Array.from(projects).map(project => new Project(project));