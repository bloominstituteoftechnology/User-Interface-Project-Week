new Vue({
    el: '#editor',
    data: {
      input: '*Hi!* You can write in **Markdown** 👇🏼 and it will be turned into styled text over there 👉🏼'
    },
    computed: {
      compiledMarkdown: function () {
        return marked(this.input, { sanitize: true })
      }
    },
    methods: {
      update: _.debounce(function (e) {
        this.input = e.target.value
      }, 300)
    }
  })