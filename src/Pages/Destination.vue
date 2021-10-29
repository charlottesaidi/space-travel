<template>
    <div class="destinationBody">
        <div class="main">
            <div class="destinations container">
                <h5><span class="page-numbers">01</span> Pick Your destination</h5>
                <div class="destination">
                    <div class="destination-img">
                        <img :src="require(`../assets${img}`)" alt="Planet">
                    </div>
                    <div class="destination-infos">
                        <nav class="destination-nav z-depth-0">
                            <ul>
                                <li v-for="link in destinations" v-bind:key="link.name"><a class="destination-link" @click="next" :id="link.name">{{link.name}}</a></li>
                            </ul>
                        </nav>
                        <h2 id="destination-title">{{title}}</h2>
                        <p id="destination-description">{{description}}</p>
                        <div class="destination-technical">
                            <div class="distance">
                                <p class="subhead2">Avg. distance</p>
                                <p class="subhead1" id="distance">{{technicals.distance}}</p>
                            </div>
                            <div class="travel">
                                <p class="subhead2">Est. travel time</p>
                                <p class="subhead1" id="travel-time">{{technicals.travel}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'destination',
    data() {
        return {
            destinations: [],
            moon: this.$destinations.moon,
            img: this.$destinations.moon.images.webp,
            title: '',
            description: '',
            technicals: {
                distance: '',
                travel: ''
            },
        }
    },
    mounted() {
        var links = document.querySelectorAll('.destination-link');
        links[0].classList.add('active');
    },
    created() {
        this.destinations = Object.keys(this.$destinations).map((key) => {
            return this.$destinations[key]
        })
        this.title = this.moon.name
        this.description = this.moon.description
        this.technicals.travel = this.moon.travel
        this.technicals.distance = this.moon.distance
    },
    methods: {
        next(event) {
            var link = event.target;
            var links = document.querySelectorAll('.destination-link');
            var infos = this.destinations.find(el => el.name === link.id)
            links.forEach(element => {
                element.classList.remove('active')
            });
            link.classList.add('active')   
            this.img = infos.images.webp
            this.title = infos.name
            this.description = infos.description
            this.technicals.travel = infos.travel
            this.technicals.distance = infos.distance
        }
    }
}
</script>