<template>
  <!-- 导航栏 -->
  <NavBar @showMenu="isShowMenuView = true" />
  <!-- 菜单页 -->
  <MenuView @closeMenu="isShowMenuView = false" v-if="isShowMenuView" />
  <div class="my-scroll-bar">
    <RouterView />
  </div>
  <img src="./assets/logo.png" ref="logo" class="logo" />
</template>

<script setup>
import MenuView from './components/MenuView.vue'
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'

const isShowMenuView = ref(false)

let scrollbox
let logo = ref(null)
const resizeBody = () => {
  scrollbox = document.getElementsByClassName('my-scroll-bar')[0]
  document.body.style.height = `${scrollbox.offsetHeight}px`
}
const scroll = () => {
  const viewportHeight = window.innerHeight
  scrollbox.style.transform = `translateY(${-scrollY}px)`
  logo.value.style.transform = `translate(-50%, ${-scrollY * 0.7}px) rotate(${(scrollY / viewportHeight) * 360 > 360 ? 360 : (scrollY / viewportHeight) * 360}deg)`
}
onMounted(() => {
  resizeBody()
  window.addEventListener('load', resizeBody)
  window.addEventListener('resize', resizeBody)
  window.addEventListener('scroll', scroll)
})
</script>

<style>
.logo {
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translate(-50%, 0);
  transition: transform 1s cubic-bezier(0.1, 0.79, 0.11, 0.82);
  height: 5rem;
  opacity: 0.5;
}
.my-scroll-bar {
  overflow: hidden;
  transition: transform 1s cubic-bezier(0.1, 0.79, 0.11, 0.82);
}
#app {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
}
</style>
