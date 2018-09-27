Vue.component('tab', {
  props: ['tabs'],
  template: `<div class="tab tab-active" data-tab="${tabs.id}">${
    tabs.name
  }</div>`
});

const app = new Vue({
  el: '#app',
  data: {
    tabs: [
      { id: 1, name: 'Pre-Construction' },
      { id: 2, name: 'Construction' },
      { id: 3, name: 'Design Build' },
      { id: 4, name: 'Sustainability' }
    ]
  }
});
