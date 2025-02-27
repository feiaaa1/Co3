<template>
  <div class="contact">
    <div class="contact-body">
      <div v-animate:slide-up="{ delay: 100 }" class="header">期待您</div>
      <div v-animate:slide-up="{ delay: 300 }" class="body">
        <div class="border"></div>
        <h1 @click="goTo(0)">联系我们</h1>
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
</template>

<script setup>
function goTo(n) {
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<style lang="scss" scoped>
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
    gap: 0.5rem;
    .header {
      font-size: 1rem;
    }
    .body {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      h1 {
        cursor: pointer;
        position: relative;
        flex-shrink: 0;
        white-space: nowrap;
        font-size: 5rem;
        font-weight: 500;
        transition: all 0.5s;
        &:hover {
          color: rgba(255, 255, 255, 0.154);

          &::before {
            opacity: 1;
            letter-spacing: 6px;
          }
        }

        &::before {
          content: '未来触觉';
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
    > p {
      opacity: 0.6;
      &:nth-of-type(2) {
        margin-left: auto;
      }
    }
  }
}
</style>
