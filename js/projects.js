//Projects Vue
Vue.component('project-tile', {
    props: ['tile'],
    template: `
    <section v-on:mouseenter="expand"  v-on:mouseleave="expand" class="project" :class="tile.id.toString()">
        <img :src="tile.img" :alt="tile.title">
        <div>
        <h2>{{ tile.title }}</h2>
        <p>{{ tile.description }}</p>
        </div>
    </section>
    `,
    methods: {
        expand: function (e) {
            
            const tileData = e.currentTarget.querySelector("div");
            const tileText = tileData.querySelector("p");
            tileData.classList.toggle("expand");
            tileText.classList.toggle("expand");
            console.log(tileData);
        }
    }
});



let projects = new Vue({
    el: '#projects',
    data: {
        title: 'Projects',
        search: 'Search Our Projects',
        projects: [
            {id: 0, title: "Nothing Found", description: "No Project Found. Try Typing: 'all' to see all of our projects!", img:"https://media.wired.com/photos/5a0201b14834c514857a7ed7/master/pass/1217-WI-APHIST-01.jpg"},
            {id: 1, title: "Superlative", description: "Only the very best", img: "https://i.ytimg.com/vi/rb8Y38eilRM/maxresdefault.jpg"},
            {id: 2, title: "Our Best Work", description: "Better than the very best", img: "https://i.ytimg.com/vi/rb8Y38eilRM/maxresdefault.jpg"},
            {id: 3, title: "Greatest Ever", description: "Truly the greatest", img: "https://i.ytimg.com/vi/rb8Y38eilRM/maxresdefault.jpg"},
            {id: 4, title: "Superlative", description: "Only the very best", img: "https://i.ytimg.com/vi/rb8Y38eilRM/maxresdefault.jpg"},
            {id: 5, title: "Our Best Work", description: "Better than the very best", img: "https://i.ytimg.com/vi/rb8Y38eilRM/maxresdefault.jpg"},
            {id: 6, title: "Greatest Ever", description: "Truly the greatest", img: "https://i.ytimg.com/vi/rb8Y38eilRM/maxresdefault.jpg"},
            {id: 7, title: "Superlative", description: "Only the very best", img: "https://i.ytimg.com/vi/rb8Y38eilRM/maxresdefault.jpg"},
            {id: 8, title: "Our Best Work", description: "Better than the very best", img: "https://i.ytimg.com/vi/rb8Y38eilRM/maxresdefault.jpg"},
            {id: 9, title: "Greatest Ever", description: "Truly the greatest", img: "https://i.ytimg.com/vi/rb8Y38eilRM/maxresdefault.jpg"},
            {id: 10, title: "Our Best Work", description: "Better than the very best", img: "https://i.ytimg.com/vi/rb8Y38eilRM/maxresdefault.jpg"},
            {id: 11, title: "Greatest Ever", description: "Truly the greatest", img: "https://i.ytimg.com/vi/rb8Y38eilRM/maxresdefault.jpg"}
        ]
    },
        computed: {
            activeTile: function() {
            let active =  this.projects.filter((tile) => {
                if ((this.search.toLowerCase() === "all" || this.search === "Search Our Projects") && tile.title != "Nothing Found") {
                    return true;
                } else if ((this.search.length >= 3 || this.search.length === 0) && tile.title.toLowerCase().includes(this.search.toLowerCase()) && tile.title !== "Nothing Found") {
                    return true;
                    }
                });
                if (active.length === 0){
                active.push(this.projects[0]);
                }
                return active;
            }
        },

        methods: {
            clear: function () {
                this.search = "";
            } 
        }
});



