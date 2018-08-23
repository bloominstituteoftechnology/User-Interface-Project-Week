//Projects Vue
Vue.component('project-tile', {
    props: ['tile'],
    template: `
    <section v-on:mouseenter="expand"  v-on:mouseleave="expand" v-on:click="modal" class="project" :class="tile.id.toString()">
        <img :src="tile.img" :alt="tile.title">
        <div class="tile-content">
            <h2>{{ tile.title }}</h2>
            <p>{{ tile.description }}</p>
        </div>

        <div class="project-modal">
        <div>
            <img :src="tile.img" :alt="tile.title">
            <div>
                <h2>{{ tile.title }}</h2>
                <p>{{ tile.description }} {{tile.longdescription}}</p>
            </div>
            </div>
        </div>
    </section>
    `,
    methods: {
        expand: function (e) {
            const tileData = e.currentTarget.querySelector("div.tile-content");
            const tileText = tileData.querySelector("p");
            tileData.classList.toggle("expand");
            tileText.classList.toggle("expand");
        },

        modal: function (e) {
            const tileModal = e.currentTarget.querySelector(".project-modal");
            const tileText = tileModal.querySelector("p");
            tileModal.classList.toggle("modal-show");
            tileText.classList.toggle("expand")
        }
    }
});


// // Modal
// const travelButtons = document.querySelectorAll(".destination .btn");
// const modal = document.querySelector('#myModal');

// for(i = 0; i < travelButtons.length; i++) {
//     let currentButton = travelButtons[i];
//     currentButton.addEventListener("click", e => {
//         TweenMax.to(modal, .25, {opacity: 1} );
//         modal.style.display = "flex";
//     });

//     window.addEventListener("click", e => {
//         e.stopPropagation();
//         if (e.target == modal) {
//             TweenMax.to(modal, .25, {opacity: 0, onComplete: () => {modal.style.display = "none"}});
//         }
//     });
    
// }


let projects = new Vue({
    el: '#projects',
    data: {
        title: 'Projects',
        search: 'Search Our Projects',
        projects: [
            {id: 0, title: "Nothing Found", longdescription:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.", description: "No Project Found. Try Typing: 'all' to see all of our projects!", img:"https://media.wired.com/photos/5a0201b14834c514857a7ed7/master/pass/1217-WI-APHIST-01.jpg"},
            {id: 1, title: "Superlative", longdescription:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.", description: "No Project Found. Try Typing: 'all' to see all of our projects!", description: "Only the very best.", img: "https://cdn0.vox-cdn.com/thumbor/RVLsMWM08RKiNl7fiTB34a69-6Q=/250x250/cdn3.vox-cdn.com/uploads/chorus_asset/file/7818995/shutterstock_503553712.jpg"},
            {id: 2, title: "Our Best Work", longdescription:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.", description: "No Project Found. Try Typing: 'all' to see all of our projects!", description: "Better than the very best.", img: "https://image.architonic.com/img_pro1-6/121/8185/balkon-1-sq.jpg"},
            {id: 3, title: "Greatest Ever", longdescription:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.", description: "No Project Found. Try Typing: 'all' to see all of our projects!", description: "Truly the greatest.", img: "https://s3-media1.fl.yelpcdn.com/bphoto/51lp_2GpfSoJIjSlY7jWqQ/ls.jpg"},
            {id: 4, title: "Superlative", longdescription:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.", description: "No Project Found. Try Typing: 'all' to see all of our projects!", description: "Only the very best.", img: "http://static.reservedirect.com/media/product/gallery/224/Best_Architecture_Walking_Tour_Since_Sliced_Bread_(65992).jpg"},
            {id: 5, title: "Our Best Work", longdescription:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.", description: "No Project Found. Try Typing: 'all' to see all of our projects!",  description: "Better than the very best.", img: "http://www.weareenzyme.com/wp-content/uploads/2016/06/FLOATING-VILLAS-250.jpg"},
            {id: 6, title: "Greatest Ever", longdescription:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.", description: "No Project Found. Try Typing: 'all' to see all of our projects!", description: "Truly the greatest.", img: "http://www.aais.org.uk/wp-content/uploads/2018/06/Modern-Architecture.jpg"},
            {id: 7, title: "Superlative", longdescription:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.", description: "No Project Found. Try Typing: 'all' to see all of our projects!", description: "Only the very best.", img: "https://cdn.vox-cdn.com/thumbor/kIumK5l407nNlXd0R7kw4h7t660=/250x250/cdn.vox-cdn.com/uploads/chorus_asset/file/4574433/Sweet_20Bird_20South-_20Studio_20Gang_20-_20CHOICE_20for_20web.0.jpg"},
            {id: 8, title: "Our Best Work", longdescription:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.", description: "No Project Found. Try Typing: 'all' to see all of our projects!", description: "Better than the very best.", img: "https://i2.wp.com/art4d.com/wp-content/uploads/2017/05/AUS-061_low-res.jpg?resize=250%2C250"},
            {id: 9, title: "Greatest Ever", longdescription:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.", description: "No Project Found. Try Typing: 'all' to see all of our projects!", description: "Truly the greatest.", img: "https://www.worldsiteguides.com/pic/europe/france/paris/sacre-coeur-basilica/sacre-3.jpg"},
            {id: 10, title: "Our Best Work", longdescription:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.", description: "No Project Found. Try Typing: 'all' to see all of our projects!", description: "Better than the very best.", img: "http://specarcsys.com/wp-content/uploads/2016/07/Vero-Beach-HOME-250x250.jpg"},
            {id: 11, title: "Greatest Ever", longdescription:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.", description: "No Project Found. Try Typing: 'all' to see all of our projects!", description: "Truly the greatest.", img: "https://d3qvqlc701gzhm.cloudfront.net/thumbs/eca7f3a676853840ad275ab54166ea03829fb13152b942a3b0c3519ca8a57aff-250.jpg"},
            {id: 12, title: "Greatest Ever", longdescription:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.", description: "No Project Found. Try Typing: 'all' to see all of our projects!", description: "Truly the greatest.", img: "http://s3.amazonaws.com/architecture-org/files/glossary/sqr_sml_marquette-building-tripartite-ear.jpg"},
            {id: 13, title: "Our Best Work", longdescription:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.", description: "No Project Found. Try Typing: 'all' to see all of our projects!", description: "Better than the very best.", img: "https://i2.wp.com/art4d.com/wp-content/uploads/2017/05/AUS-061_low-res.jpg?resize=250%2C250"},
            {id: 14, title: "Greatest Ever", longdescription:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.", description: "No Project Found. Try Typing: 'all' to see all of our projects!", description: "Truly the greatest.", img: "https://www.worldsiteguides.com/pic/europe/france/paris/sacre-coeur-basilica/sacre-3.jpg"},
            {id: 15, title: "Our Best Work", longdescription:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.", description: "No Project Found. Try Typing: 'all' to see all of our projects!", description: "Better than the very best.", img: "http://specarcsys.com/wp-content/uploads/2016/07/Vero-Beach-HOME-250x250.jpg"},
            {id: 16, title: "Greatest Ever", longdescription:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.", description: "No Project Found. Try Typing: 'all' to see all of our projects!", description: "Truly the greatest.", img: "https://d3qvqlc701gzhm.cloudfront.net/thumbs/eca7f3a676853840ad275ab54166ea03829fb13152b942a3b0c3519ca8a57aff-250.jpg"}
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



