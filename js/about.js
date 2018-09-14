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
    this.selectedPic.classList.add("topic-showing");
    this.selectedPara = this.buttons[0].topicPara.element;
    this.selectedPara.classList.add("topic-showing");
  }
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
    this.deselect(topic.selectedButton);
    this.topicPic.deselect(topic.selectedPic);
    this.topicPara.deselect(topic.selectedPara);
    topic.selectedButton = this.element;
    topic.selectedPic = this.topicPic.element;
    topic.selectedPara = this.topicPara.element;
    this.element.classList.add("topic-showing");
    this.topicPic.select();
    this.topicPara.select();
  }

  deselect(link) {
    link.classList.remove("topic-showing");
  }
}

class TopicPic {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add("topic-showing");
  }

  deselect(item) {
    item.classList.remove("topic-showing");
  }
}

class TopicPara {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add("topic-showing");
  }

  deselect(item) {
    item.classList.remove("topic-showing");
  }
}

const topic = new Topic(document.querySelector(".about-content"));
