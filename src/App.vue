<template>
  <div class="mainBody">
    <NavBar />
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
  </div>
</template>

<script>
import NavBar from './components/Nav.vue'
export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
  @import './assets/css/style.css';
</style>