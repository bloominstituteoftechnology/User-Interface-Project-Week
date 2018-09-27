const cardText = [
  'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.',
  "Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric 'outside the box' thinking. Completely pursue scalable customer service through sustainable potentialities"
];

Vue.component('tab', {
  props: ['tab'],
  template: '<div class="tab">{{tab.name}}</div>'
});

Vue.component('card', {
  props: ['card'],
  template: `
  <div class="card card-active">
    <div class="card__content">
      <h3 class="card__header">{{card.name}}</h3>
      <p>{{card.text[0]}}</p>
      <p>{{card.text[1]}}</p>
    </div>
    <div class="card__img">
      <img :src="card.img"/>
    </div>
  </div>`
});

const app = new Vue({
  el: '#app',
  data: {
    tabs: [
      { id: 1, name: 'Pre-Construction' },
      { id: 2, name: 'Construction' },
      { id: 3, name: 'Design Build' },
      { id: 4, name: 'Sustainability' }
    ],
    cards: [
      {
        id: 1,
        name: 'Pre-Construction',
        text: cardText,
        img: `img/services/services-tab-pre-construction-img.png`
      },
      {
        id: 2,
        name: 'Construction',
        text: cardText,
        img: `img/services/services-tab-construction-img.png`
      },
      {
        id: 3,
        name: 'Design Build',
        text: cardText,
        img: `img/services/services-tab-design-build-img.png`
      },
      {
        id: 4,
        name: 'Sustainability',
        text: cardText,
        img: `img/services/services-tab-sustainablity-img.png`
      }
    ]
  }
});
