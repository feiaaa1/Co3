<template>
  <div class="home-container">
    <!-- 首页 -->
    <div class="home">
      <iframe
        src="https://my.spline.design/prismcoin-6075b2e0622e6809a57e6541f7f2e81a/"
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe>
    </div>
    <!-- 关于我们 -->
    <div class="about">
      <div class="text">
        <h1 v-animate:slide-up="{ delay: 100 }">关于我们</h1>
        <p v-animate:slide-up="{ delay: 300 }">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, odit sed.
        </p>
      </div>
    </div>
    <!-- 团队介绍 -->
    <div class="introduction">
      <div class="main">
        <h1 v-animate="{ delay: 100 }">2025</h1>
        <div class="img" v-animate:slide-up="{ delay: 300 }"></div>
        <h2 v-animate="{ delay: 500 }">
          A CREATIVE<br />
          STUDIO
        </h2>
      </div>
      <div class="text-container" v-animate="{ delay: 1000 }">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quo, repudiandae velit
          repellendus optio atque neque recusandae reprehenderit. Quibusdam eos sit distinctio. Eos
          tenetur numquam error officia sit, vitae ipsum.
        </p>
      </div>
    </div>
    <!-- 业务介绍 -->
    <div class="business-1">
      <div v-animate:slide-up="{ delay: 100 }" class="text">
        <h1>我们能做<br />什么</h1>
      </div>
      <div v-animate:slide-up="{ delay: 300 }" class="swiper-container">
        <div class="swiper-item">
          <div class="header">
            <h3>我们可以</h3>
            <h1>沉浸式内容<br />创作制作</h1>
            <p>以数字影像打造沉浸视觉效果</p>
          </div>
          <div class="body"></div>
        </div>
      </div>
    </div>
    <div class="business-1">
      <div v-animate:slide-up="{ delay: 100 }" class="text">
        <h1>我们能做<br />什么</h1>
      </div>
      <div v-animate:slide-up="{ delay: 300 }" class="swiper-container">
        <div class="swiper-item">
          <div class="header">
            <h3>我们可以</h3>
            <h1>全案策划<br />与设计</h1>
            <p>提供从创意到实施的策划方案</p>
          </div>
          <div class="body"></div>
        </div>
      </div>
    </div>
    <div class="business-2">
      <div v-animate:slide-up="{ delay: 100 }" class="text">
        <h1>我们能做<br />什么</h1>
      </div>
      <div v-animate:slide-up="{ delay: 300 }" class="swiper-container">
        <div class="swiper-item">
          <div class="header">
            <h3>我们可以</h3>
            <h1>技术开发<br />与制作</h1>
            <p>将创意以各种形式转化为现实</p>
          </div>
          <div class="body"></div>
        </div>
      </div>
    </div>
    <div class="business-2">
      <div v-animate:slide-up="{ delay: 100 }" class="text">
        <h1>我们能做<br />什么</h1>
      </div>
      <div v-animate:slide-up="{ delay: 300 }" class="swiper-container">
        <div class="swiper-item">
          <div class="header">
            <h3>我们可以</h3>
            <h1>系统集成<br />与落地</h1>
            <p>提供现场设备安装与软件调试</p>
          </div>
          <div class="body"></div>
        </div>
      </div>
    </div>
    <!-- 作品介绍 -->
    <div class="works">
      <p v-animate="{ delay: 100 }">未来触觉的作品案例图片总览</p>
      <div class="text">
        <h1 v-animate:slide-up="{ delay: 300 }">满足您的不同需求</h1>
        <p v-animate:slide-up="{ delay: 500 }">
          作品涵盖三维动画影像，沉浸式展厅，文旅/快闪活动，沉浸式展厅，文旅/快闪活动，
        </p>
      </div>
      <div v-animate="{ delay: 100 }" ref="scrollContainer" class="scroll-container">
        <div ref="v_scroll" class="v-scroll">
          <div class="content">
            <div class="img-list">
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
    <!-- 联系我们 -->
    <div class="contact">
      <div class="contact-body">
        <div v-animate:slide-up="{ delay: 100 }" class="header">期待您</div>
        <div v-animate:slide-up="{ delay: 300 }" class="body">
          <div class="border"></div>
          <h1>联系我们</h1>
          <div class="border"></div>
        </div>
        <div v-animate:slide-up="{ delay: 500 }" class="footer">
          <div class="img"></div>
          <div class="img"></div>
        </div>
      </div>
      <div v-animate:slide-up="{ delay: 700 }" class="contact-footer">
        <p>地址：中国，广东，广州</p>
        <p>电话：16676778370</p>
        <p>邮箱：Co3_lab@163.com</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 滚动容器引用
const scrollContainer = ref(null)
const v_scroll = ref(null)
const isZoom = ref(false)
const isIntersecting = ref(false)

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 进入视口时添加动画类
      isIntersecting.value = true
    } else {
      resetImgSize()
      v_scroll.value.scrollTo({
        top: 0,
      })
      isIntersecting.value = false
    }
  })
})

onMounted(() => {
  observer.observe(scrollContainer.value)
})

function resetImgSize() {
  const imgList = document.querySelectorAll('.img-item')
  imgList.forEach((item, index) => {
    if (index > 9 && index < 30) {
      item.style.backgroundColor = '#787878'
      item.style.width = '80px'
    }
  })
  const scroll_container = scrollContainer.value
  scroll_container.style.transform = `scale(1)`
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
    const v_scroll = document.querySelector('.v-scroll')
    const targetRect = targetElement.getBoundingClientRect()
    v_scroll.scrollBy({
      top: targetRect.left - halfViewportWidth + 250,
      behavior: 'smooth',
    })
  }
}
// }
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .home {
    width: 100%;
    height: 100vh;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
  .about {
    width: 100%;
    height: 100vh;
    background-color: black;
    color: white;

    > .text {
      width: 18rem;
      margin: 0 auto;
      text-align: center;
      margin-top: 60vh;
      h1 {
        font-size: 4rem;
        font-weight: 500;
      }
      p {
        font-size: 0.7rem;
        opacity: 0.6;
      }
    }
  }

  .introduction {
    width: 100%;
    height: 100vh;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: auto;
      h1 {
        font-size: 7rem;
        transform: translateY(3rem);
      }
      .img {
        z-index: 2;
        width: 23rem;
        height: 17rem;
        background-color: #d17171;
      }
      h2 {
        text-align: center;
        font-size: 3rem;
        transform: translateY(-2rem);
      }
    }

    .text-container {
      position: absolute;
      z-index: 10;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      text-align: center;

      > p {
        font-size: 1.5rem;
      }
    }
  }

  .business-1 {
    width: 100%;
    height: 100vh;
    background-color: black;
    color: white;
    position: relative;

    > .text {
      width: 16rem;
      position: absolute;
      top: 8rem;
      left: 8rem;
      h1 {
        color: white;
        font-size: 3.4rem;
        font-weight: 500;
        text-align: start;
      }
    }

    .swiper-container {
      width: 40rem;
      position: absolute;
      bottom: 4rem;
      right: 4rem;
      height: 25rem;

      .swiper-item {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .header {
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: space-between;
          h3 {
            font-size: 1.5rem;
            font-weight: 500;
          }
          h1 {
            font-size: 3.2rem;
            font-weight: 500;
            transform: translateY(-6rem);
            color: #cc3eff;
          }
          p {
            font-size: 1.3rem;
            margin-left: 1rem;
          }
        }
        .body {
          flex-shrink: 0;
          width: 17rem;
          height: 100%;
          background-color: #787878;
        }
      }
    }
  }
  .business-2 {
    width: 100%;
    height: 100vh;
    background-color: black;
    color: white;
    position: relative;

    > .text {
      width: 16rem;
      position: absolute;
      top: 8rem;
      right: 8rem;
      h1 {
        color: white;
        font-size: 3.4rem;
        font-weight: 500;
        text-align: start;
      }
    }

    .swiper-container {
      width: 40rem;
      position: absolute;
      bottom: 4rem;
      left: 4rem;
      height: 25rem;

      .swiper-item {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .header {
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: space-between;
          h3 {
            font-size: 1.5rem;
            font-weight: 500;
          }
          h1 {
            font-size: 3.2rem;
            font-weight: 500;
            transform: translateY(-6rem);
            color: #cc3eff;
          }
          p {
            font-size: 1.3rem;
            margin-left: 1rem;
          }
        }
        .body {
          flex-shrink: 0;
          width: 17rem;
          height: 100%;
          background-color: #787878;
        }
      }
    }
  }
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
      height: 20rem;
      transform-origin: 50% 50%;
      transition: all 0.3s;

      .v-scroll {
        position: relative;
        height: 100vw;
        width: 20rem;
        overflow: scroll;
        overflow-x: hidden;
        transform-origin: 0 0;
        transform: rotate(-90deg) translateX(-20rem);
        &::-webkit-scrollbar {
          display: none;
        }

        .content {
          position: absolute;
          height: 20rem;
          left: 100%;
          transform-origin: 0 0;
          transform: rotate(90deg);
          .img-list {
            display: flex;
            gap: 1rem;
            height: 100%;
            .img-item {
              width: 80px;
              height: 100%;
              background-color: #787878;
              transform: translateX(100rem);
              will-change: transform;
              border-radius: 3px;
              cursor: pointer;
              transition: all 0.3s;
              &:hover {
                background-color: #fff !important;
              }

              &:nth-of-type(-n + 10) {
                background-color: transparent;
                pointer-events: none;
              }
              &:nth-last-of-type(-n + 10) {
                background-color: transparent;
                pointer-events: none;
              }
            }
            .active {
              @keyframes fadeIn {
                0% {
                  transform: translateX(30rem);
                }
                100% {
                  transform: translateX(0);
                }
              }
              @for $i from 1 through 40 {
                &:nth-of-type(#{$i + 10}) {
                  animation: fadeIn 0.5s cubic-bezier(0.57, 0.68, 0.49, 0.99) forwards;
                  animation-delay: #{$i * 0.08}s;
                }
              }
            }
          }
        }
      }
    }
  }
  .contact {
    width: 100%;
    height: 100vh;
    background-color: black;
    color: white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .contact-body {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .5rem;
      .header {
        font-size: 1rem;
      }
      .body{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        h1 {
          flex-shrink: 0;
          white-space: nowrap;
          font-size: 5rem;
          font-weight: 500;
        }
        .border {
          width: 35%;
          height: 1px;
          background-color: white;
          opacity: 0.3;

        }
      }
      .footer {
        display: flex;
        gap: 20px;
        .img {
          width: 4rem;
          height: 4rem;
          background-color: #787878;
      }
    }
    }

    .contact-footer {
      width: 100%;
      padding: 0 3rem;
      position: absolute;
      bottom: 20px;
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      >p{
        opacity: .6;
        &:nth-of-type(2){
          margin-left: auto;
        }
      }
    }
  }
}
</style>
