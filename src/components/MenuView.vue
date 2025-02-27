<template>
  <div ref="bg" class="bg">
    <div ref="view" class="menuView-container">
      <div @click="$emit('closeMenu')" v-animate:slide-up="{ delay: 0 }" class="header">
        <header>菜单</header>
        <main>MENU PAGE</main>
      </div>
      <div class="body">
        <div v-animate:slide-up="{ delay: 100 }" class="item">
          <header @click="goTo(0)" data-text="返回首页">返回首页</header>
          <main></main>
          <footer>Back to home page</footer>
          <img src="@/assets/服务1.png" alt="" />
        </div>
        <div v-animate:slide-up="{ delay: 200 }" class="item">
          <header @click="goTo(1)" data-text="关于我们">关于我们</header>
          <main></main>
          <footer>About us</footer>
          <img src="@/assets/服务2.png" alt="" />
        </div>
        <div v-animate:slide-up="{ delay: 300 }" class="item">
          <header @click="goTo(8)" data-text="作品案例">作品案例</header>
          <main></main>
          <footer>Work case</footer>
          <img src="@/assets/服务3.png" alt="" />
        </div>
        <div v-animate:slide-up="{ delay: 400 }" class="item">
          <header @click="goTo(9)" data-text="联系我们">联系我们</header>
          <main></main>
          <footer>Contact us</footer>
          <img src="@/assets/服务4.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['closeMenu'])
const bg = ref(null)
const view = ref(null)
function goTo(n) {
  const innerHeight = window.innerHeight
  // 1. 禁用 transition
  const scrollBar = document.querySelector('.my-scroll-bar')
  scrollBar.style.transition = 'all 0s'
  // 强制浏览器立即应用样式变更（触发重排）
  void scrollBar.offsetHeight // 这行代码的作用是强制同步重排
  // 2. 执行滚动
  document.documentElement.scrollTo({
    top: n * innerHeight,
    behavior: 'instant', // 必须用 'instant' 而非 'auto' 确保无过渡
  })
  setTimeout(() => {
    document.querySelector('.my-scroll-bar').style.transition =
      'transform 1s cubic-bezier(0.1, 0.79, 0.11, 0.82)'
  }, 10)
  view.value.style.transform = 'translateX(100%)'
  setTimeout(() => {
    bg.value.style.transform = 'translateX(100%)'
    setTimeout(() => {
      emit('closeMenu')
    }, 1100)
  }, 200)
}
</script>

<style lang="scss" scoped>
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  position: absolute;
  z-index: 999999;
  transition: all 1s;
  .menuView-container {
    position: fixed;
    height: 100vh;
    width: 100%;
    transition: all 1s;
    background-color: black;
    .header {
      color: white;
      width: fit-content;
      margin-left: auto;
      margin-top: 5rem;
      margin-right: 4rem;
      text-align: right;
      header {
        letter-spacing: 10px;
        font-size: 4.2rem;
        margin-bottom: -10px;
      }
      main {
        font-size: 2rem;
        color: #b6b6b6;
      }
    }
    .body {
      color: white;
      position: absolute;
      top: 50%;
      margin-left: 5rem;
      display: flex;
      align-items: center;
      gap: 4rem;
      .item {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: fit-content;
        position: relative;
        img {
          height: 3.5rem;
          z-index: -1;
          top: -0.8rem;
          left: -1rem;
          position: absolute;
        }
        header {
          font-size: 3rem;
          letter-spacing: 5px;
          transition: all 0.5s;
          position: relative;
          &:hover {
            color: rgba(255, 255, 255, 0.154);

            &::before {
              opacity: 1;
              letter-spacing: 6px;
            }
          }

          &::before {
            content: attr(data-text);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 1.5rem;
            color: var(--primary-color);
            text-shadow: 0 0 10px var(--primary-color);
            font-weight: 500;
            letter-spacing: 40px;
            white-space: nowrap;
            opacity: 0;
            transition: 0.5s;
          }
        }
        main {
          margin-top: 5px;
          height: 1px;
          width: 100%;
          background-color: #919191;
        }
        footer {
          font-size: 1.2rem;
          color: #bdbdbd;
          margin-top: 0.7rem;
        }
      }
    }
  }
}
</style>
