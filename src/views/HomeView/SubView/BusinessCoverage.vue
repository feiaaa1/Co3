<template>
  <div class="coverage-container">
    <div v-animate:slide-up="{ delay: 100 }" class="scroll-wrapper">
      <div class="text-container">
        <!-- 重复 4 次保证无缝衔接 -->
        <h1 v-for="n in 6" :key="n">文旅夜游·户外活动·数字展厅·临时活动·户外装置</h1>
      </div>
    </div>
    <div
      v-animate:slide-up="{ delay: 300 }"
      ref="secondaryText"
      class="secondary-text"
      :class="{ eraseAnimate: isShowEraseAnimate }"
    >
      <p>
        我们的业务涵盖了文旅夜游、户外活动、数字展厅、临时活动、户外装置，细分场景包括但不限于<br />
      </p>
      <p>
        景区景点、城市公园、主题乐园、企业展厅、艺术空间、商业活动、快闪活动、灯光装置、机械<br />
      </p>
      <div class="last-text">
        <p>装置等，我们提供上述场景领域的<br /></p>
        <span>全案策划、内容创作制作、技术开发制作、系统集成与落地服务。</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

onMounted(() => {
  observer.observe(secondaryText.value)
})
const secondaryText = ref(null)
const isShowEraseAnimate = ref(false)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      isShowEraseAnimate.value = true
    } else {
      isShowEraseAnimate.value = false
    }
  })
})
</script>

<style lang="scss" scoped>
.coverage-container {
  width: 100%;
  height: 100vh;
  background: black;
  overflow: hidden; /* 隐藏溢出内容 */
  position: relative;

  .scroll-wrapper {
    position: absolute;
    top: 13rem;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;

    .text-container {
      display: flex;
      align-items: center;
      justify-content: center;
      animation: scroll 120s linear infinite;

      h1 {
        color: white;
        font-size: 6.5rem;
        font-weight: 500;
        white-space: nowrap;
        flex-shrink: 0;
        padding-right: 2rem; /* 文字间隔 */
      }
    }
  }
  .secondary-text {
    position: absolute;
    color: white;
    bottom: 15rem;
    left: 4rem;
    > p {
      width: fit-content;
      &:first-of-type {
        background: linear-gradient(to right, #cacaca var(--a), #3d3d3d calc(var(--a)));
        -webkit-background-clip: text;
        color: transparent;
      }
      &:nth-of-type(2) {
        background: linear-gradient(to right, #cacaca var(--a), #3d3d3d calc(var(--a)));
        -webkit-background-clip: text;
        color: transparent;
      }
    }
    span {
      color: var(--primary-color);
    }
    .last-text {
      background: linear-gradient(to right, #cacaca var(--a), #3d3d3d calc(var(--a)));
      -webkit-background-clip: text;
      color: transparent;
      display: flex;
    }
  }
  .eraseAnimate {
    > p {
      &:first-of-type {
        animation: a-erase 5s linear forwards;
      }
      &:nth-of-type(2) {
        animation: a-erase 5s linear 1s forwards;
      }
    }
    .last-text {
      animation: a-erase 5s linear 2s forwards;
    }
  }
  --a: 0%;
}
@property --a {
  syntax: '<percentage>';
  initial-value: 0%;
  inherits: false;
}

@keyframes a-erase {
  to {
    --a: 100%;
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
