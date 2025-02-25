<template>
  <div class="about">
    <div class="text">
      <h1 v-animate:slide-up="{ delay: 100 }">关于我们</h1>
      <p v-animate:slide-up="{ delay: 300 }">
        一家专注于打造自然体验与互动的沉浸式娱乐服务公司，为企业和家庭娱乐提供创新的视觉体验<br />“改变您接触黑夜的方式”
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.about {
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;

  > .text {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    margin-top: 60vh;
    h1 {
      font-size: 5rem;
      font-weight: 500;
    }
    p {
      font-size: 0.7rem;
      color: #9f9f9f;
    }
  }
}
</style>
