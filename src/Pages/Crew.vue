<template>
    <div class="crewBody">
        <div class="main">
            <div class="crew container">
                <h5><span class="page-numbers">02</span> meet your crew</h5>
                <div class="crew-infos">
                    <h4 id="crew-role">{{role}}</h4>
                    <h3 id="crew-name">{{name}}</h3>
                    <p id="crew-bio">{{bio}}</p>
                    <ul class="nav-controls">
                        <li v-for="member in crew" v-bind:key="member.name">
                            <button class="dot" :id="member.name" @click="next"></button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="crew-img">
            <img :src="require(`../assets${img}`)" alt="Crew member">
        </div>
    </div>
</template>

<script>
export default {
    name: 'destination',
    data() {
        return {
            crew: [],
            hurley: this.$crew.hurley,
            img: this.$crew.hurley.images.webp,
            name: '',
            role: '',
            bio: '',
        }
    },
    mounted() {
        var links = document.querySelectorAll('.dot');
        links[0].classList.add('active');
    },
    created() {
        this.crew = Object.keys(this.$crew).map((key) => {
            return this.$crew[key]
        })
        this.name = this.hurley.name
        this.role = this.hurley.role
        this.bio = this.hurley.bio
    },
    methods: {
        next(event) {
            var link = event.target;
            var links = document.querySelectorAll('.dot');
            var infos = this.crew.find(el => el.name === link.id)
            links.forEach(element => {
                element.classList.remove('active')
            });
            link.classList.add('active')   
            this.img = infos.images.webp
            this.name = infos.name
            this.role = infos.role
            this.bio = infos.bio
        }
    }
}
</script>