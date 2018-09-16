class Topic {
  constructor(element) {
    this.element = element;
    let buttons = document.querySelectorAll(".topic-button");
    this.buttons = Array.from(buttons).map(buttons => {
      return new TopicButton(buttons);
    });
    this.selectedButton = this.buttons[0].element;
    this.selectedButton.classList.add("topic-showing");
    this.selectedPic = this.buttons[0].topicPic.element;
    this.selectedPic.style.display = "block";
    this.selectedPic.style.opacity = "1";
    this.selectedPara = this.buttons[0].topicPara.element;
    this.selectedPara.style.display = "block";
    this.selectedPara.style.opacity = "1";
  }

  switchSelected() {}
}

class TopicButton {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.topic;
    this.picElement = document.querySelector(
      `.topic-pic[data-topic="${this.data}"]`
    );
    this.topicPic = new TopicPic(this.picElement);
    this.paraElement = document.querySelector(
      `.topic-para[data-topic="${this.data}"]`
    );
    this.topicPara = new TopicPara(this.paraElement);
    this.element.addEventListener("click", () => this.select());
  }

  select() {
    topic.selectedButton.classList.remove("topic-showing");
    topic.selectedButton = this.element;
    topic.selectedButton.classList.add("topic-showing");
    const t1 = new TimelineMax();
    t1.set(topic.selectedPic, { zIndex: 0 })
      .set(topic.selectedPara, { zIndex: 0 })
      .to(topic.selectedPic, 1, {
        opacity: 0,
        x: -300,
        scale:0
      })
      .to(
        topic.selectedPara,
        1,
        {
          opacity: 0,
          y: -300,
          scale: 0
        },
        "-=1"
      )
      .addCallback(() => {
        topic.selectedPic.style.display = "none";
        topic.selectedPara.style.display = "none";
        topic.selectedPic = this.topicPic.element;
        topic.selectedPara = this.topicPara.element;
        topic.selectedPic.style.display = "block";
        topic.selectedPara.style.display = "block";
        this.showElements();
      }, 1);
  }

  showElements() {
    const t2 = new TimelineMax();
    t2.set(topic.selectedPic, { x: 300, opacity: 0, scale: 1 })
      .set(topic.selectedPara, { y: 300, opacity: 0, scale: 1 })
      .to(topic.selectedPic, 2, {
        x: 0,
        opacity: 1
      })
      .to(
        topic.selectedPara,
        2,
        {
          y: 0,
          opacity: 1
        },
        "-=2"
      );
  }
}

class TopicPic {
  constructor(element) {
    this.element = element;
  }
}

class TopicPara {
  constructor(element) {
    this.element = element;
  }
}

const topic = new Topic(document.querySelector(".about-content"));
