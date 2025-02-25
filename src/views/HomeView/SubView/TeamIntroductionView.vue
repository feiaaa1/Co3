<template>
  <div class="introduction">
    <div class="main">
      <h1 v-animate="{ delay: 100 }">2025</h1>
      <img src="@/assets/介绍图.png" class="img" v-animate:slide-up="{ delay: 300 }" />
      <h2 v-animate="{ delay: 500 }">
        A CREATIVE<br />
        STUDIO
      </h2>
    </div>
    <div class="text-container" v-animate="{ delay: 1000 }">
      <p>
        未来触觉文化科技公司专注于户外“大自然”主题的3D
        Mapping和交互技术通过光影全息与交互技术，打造自然体验与互动为核心的沉浸式娱乐服务。<br />公司致力于为企业和家庭娱乐提供创新的视觉体验，提升产品展示的传播性、高效性，用户的趣味性。我们的slogan是“改变您接触黑夜的方式”。
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
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
      transform: translateY(7rem);
    }
    .img {
      z-index: 2;
      height: 27rem;
    }
    h2 {
      text-align: center;
      font-size: 3rem;
      transform: translateY(-4rem);
      line-height: 3.2rem;
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
      color: var(--primary-color);
      font-size: 1.3rem;
    }
  }
}
</style>
