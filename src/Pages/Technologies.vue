<template>
    <div class="techBody">
        <div class="main">
            <div class="tech container">
                <h5><span class="page-numbers">03</span> space launch 101</h5>
                <div class="tech-element">
                    <ul class="tech nav-controls">
                        <li v-for="(item, index) in tech" v-bind:key="item.name">
                            <span class="dot" :id="item.name" @click="next">{{index+1}}</span>
                        </li>
                    </ul>
                    <div class="descriptions">
                        <p class="nav-text">THE TERMINOLOGY…</p>
                        <h3 id="tech-title">{{name}}</h3>
                        <p id="tech-description">{{description}}</p>
                    </div>
                </div>
                <div class="tech-img">
                    <img :src="require(`../assets${img}`)" alt="Crew member">
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
            tech: [],
            launch: this.$tech.launch,
            img: '',
            name: '',
            description: '',
        }
    },
    mounted() {
        var links = document.querySelectorAll('.dot');
        links[0].classList.add('active');
        
    },
    created() {
        var vm = this
        this.tech = Object.keys(this.$tech).map((key) => {
            return this.$tech[key]
        })
        this.name = this.launch.name
        this.description = this.launch.description
        this.img = this.launch.images.portrait;
        vm.resizeImage(this.launch)
    },
    methods: {
        next(event) {
            var vm = this
            var link = event.target;
            var links = document.querySelectorAll('.dot');
            var infos = this.tech.find(el => el.name === link.id)
            links.forEach(element => {
                element.classList.remove('active')
            });
            link.classList.add('active')   
            this.img = infos.images.portrait
            this.name = infos.name
            this.description = infos.description
            vm.resizeImage(infos)
        },
        resizeImage(data) {
            var tablet = window.matchMedia("(max-width: 890px)")
            if(tablet.matches) {
                this.img = data.images.landscape
            }
        }
    }
}
</script>