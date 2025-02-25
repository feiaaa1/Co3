<template>
  <div ref="works_container" class="works">
    <div class="text">
      <h1 v-animate:slide-up="{ delay: 100 }">满足您的不同需求</h1>
      <p v-animate:slide-up="{ delay: 300 }">
        作品涵盖三维动画影像，沉浸式展厅，文旅/快闪活动，沉浸式展厅，文旅/快闪活动，
      </p>
    </div>
    <div ref="scrollContainer" class="scroll-container">
      <div ref="v_scroll" class="v-scroll">
        <div class="content">
          <div v-animate="{ delay: 300 }" class="img-list">
            <div
              :class="{ 'img-item': true, active: isIntersecting }"
              v-for="(item, index) in 40"
              :key="item"
              @click.stop="zoomImg(index)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

// 滚动容器引用
const scrollContainer = ref(null)
const v_scroll = ref(null)
const works_container = ref(null)
const isZoom = ref(false)
const isIntersecting = ref(false)
onMounted(() => {
  observer.observe(scrollContainer.value)
})

function imgAnimate() {
  const imgs = document.querySelectorAll('.img-item')
  imgs.forEach((item, index) => {
    gsap.to(item, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: 'power4.out',
      delay: (index - 14) * 0.08,
    })
  })
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 进入视口时添加动画
      imgAnimate()
    } else {
      resetImgSize()
      v_scroll.value.scrollTo({
        top: 0,
      })
      const imgs = document.querySelectorAll('.img-item')
      imgs.forEach((item) => {
        gsap.set(item, {
          opacity: 0,
          x: 1600,
        })
      })
    }
  })
})

function resetImgSize() {
  const imgList = document.querySelectorAll('.img-item')
  imgList.forEach((item) => {
    item.style.backgroundColor = '#787878'
    item.style.width = '60px'
  })
  const scroll_container = scrollContainer.value
  scroll_container.style.transform = `scale(1)`
}
function smoothScrollBy(deltaY, duration, scrollEle) {
  const startY = scrollEle.scrollTop // 当前滚动位置
  let startTime = null

  function animate(currentTime) {
    if (!startTime) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)
    const ease = easeInOutQuad(progress)
    scrollEle.scrollTo(0, startY + deltaY * ease) // 关键修改点
    if (timeElapsed < duration) requestAnimationFrame(animate)
  }

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
  }

  requestAnimationFrame(animate)
}

function zoomImg(index) {
  if (isZoom.value) {
    isZoom.value = false
    resetImgSize()
  } else {
    isZoom.value = true
    resetImgSize()
    // 滚动到元素中心的方法
    const halfViewportWidth = document.documentElement.clientWidth / 2
    const targetElement = document.querySelector(`.img-item:nth-child(${index + 1})`)
    targetElement.style.backgroundColor = '#fff'
    targetElement.style.width = '500px'
    const scroll_container = scrollContainer.value
    scroll_container.style.transform = `scale(2)`
    const targetRect = targetElement.getBoundingClientRect()
    const html = document.querySelector('html')
    const worksContainerRect = works_container.value.getBoundingClientRect()
    smoothScrollBy(worksContainerRect.top, 300, html)
    smoothScrollBy(targetRect.left - halfViewportWidth + 250, 300, v_scroll.value)
  }
}
// }
</script>

<style lang="scss" scoped>
.works {
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    position: absolute;
    top: 3rem;
  }

  > .text {
    text-align: center;
    h1 {
      font-size: 3.4rem;
      font-weight: 500;
    }
  }

  .scroll-container {
    position: absolute;
    width: 100vw;
    height: 25rem;
    transform-origin: 50% 50%;
    transition: all 0.3s;

    .v-scroll {
      position: relative;
      height: 100vw;
      width: 25rem;
      overflow-y: auto;
      overflow-x: visible;
      transform-origin: 0 0;
      transform: rotate(-90deg) translateX(-100%);

      &::-webkit-scrollbar {
        display: none;
      }

      .content {
        position: absolute;
        height: 25rem;
        left: 100%;
        transform-origin: 0 0;
        transform: rotate(90deg);
        --index: calc(1vw + 1vh);
        --transition: cubic-bezier(0.1, 0.7, 0, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        .img-list {
          display: flex;
          height: 15rem;
          perspective: calc(var(--index) * 60);
          transform-style: preserve-3d;
          gap: 0.7rem;
          .img-item {
            opacity: 0;
            width: 60px;
            height: 100%;
            background-color: #787878;
            transition: all 0.3s;
            border-radius: 1px;
            cursor: pointer;
            transform-origin: 50% 50%;
            will-change: transform;
            transform: translateX(100rem);

            &::before,
            &::after {
              content: '';
              position: absolute;
              width: 16px;
              height: 100%;
              right: 100%;
            }
            &::after {
              left: 100%;
            }

            &:nth-of-type(-n + 13) {
              background-color: transparent !important;
              pointer-events: none;
            }
            &:nth-last-of-type(-n + 10) {
              background-color: transparent !important;
              pointer-events: none;
            }
            &:hover {
              background-color: #fff !important;
              transform: translateX(0) translateZ(calc(var(--index) * 10)) !important;
            }

            &:hover + * {
              transform: translateX(0) translateZ(calc(var(--index) * 8.5)) rotateY(35deg) !important;
              z-index: -1;
            }
            &:hover + * + * {
              transform: translateX(0) translateZ(calc(var(--index) * 5.6)) rotateY(40deg) !important;
              z-index: -2;
            }
            &:hover + * + * + * {
              transform: translateX(0) translateZ(calc(var(--index) * 2.4)) rotateY(30deg) !important;
              z-index: -2;
            }
            &:hover + * + * + * + * {
              transform: translateX(0) translateZ(calc(var(--index) * 0.6)) rotateY(14deg) !important;
              z-index: -4;
            }

            &:has(+ :hover) {
              transform: translateZ(calc(var(--index) * 8.5)) rotateY(-35deg) !important;
            }
            &:has(+ * + :hover) {
              transform: translateZ(calc(var(--index) * 5.6)) rotateY(-40deg) !important;
            }
            &:has(+ * + * + :hover) {
              transform: translateZ(calc(var(--index) * 2.4)) rotateY(-30deg) !important;
            }
            &:has(+ * + * + * + :hover) {
              transform: translateZ(calc(var(--index) * 0.6)) rotateY(-14deg) !important;
            }
          }
        }
      }
    }
  }
}
</style>
