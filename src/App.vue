<template>
  <div class="mainBody">
    <NavBar />
      <transition name="scale" mode="out-in">
        <router-view />
      </transition>
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