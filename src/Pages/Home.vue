<template>
    <div class="homeBody">
        <div class="main">
            <div class="home container">
                <div class="present">
                    <p class="subhead_main">SO, YOU WANT TO TRAVEL TO</p>
                    <h1>
                        SPACE
                    </h1>
                    <div class="body_text">
                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                </div>
                <div class="explore" @click="goToPage">
                    <button class="explore-btn">EXPLORE</button> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    methods: {
        goToPage() {
            this.$router.push('/space-travel/destination')
        }
    },
}
</script>