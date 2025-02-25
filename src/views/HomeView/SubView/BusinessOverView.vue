<template>
  <div class="business-container">
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
          <div class="body">
            <img src="@/assets/c.jpg" alt="" />
          </div>
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
          <div class="body">
            <img src="@/assets/b.jpg" alt="" />
          </div>
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
          <div class="body">
            <img src="@/assets/d.jpg" alt="" />
          </div>
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
          <div class="body">
            <img src="@/assets/a.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.business-container {
  width: 100%;
  display: flex;
  flex-direction: column;
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
            color: var(--primary-color);
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
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
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
            color: var(--primary-color);
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
}
</style>
