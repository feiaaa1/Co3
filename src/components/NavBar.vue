<template>
  <div class="navbar-container">
    <div class="header"></div>
    <div class="menu">
      <svg
      @click="$emit('showMenu')"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="menu-svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
          clip-rule="evenodd"
        />
      </svg>
      <div @click="$emit('showMenu')" class="menu-text">菜单页面</div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.navbar-container {
  position: fixed;
  top: 0;
  z-index: 999;
  color: white;
  padding: 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .menu-svg {
      border: 1px solid #919191;
      border-radius: 50%;
      height: 2rem;
      color: #919191;
      padding: 2px;
      background-color: #191919;
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        border: 1px solid black;
        color: black;
        background-color: #919191;
      }
    }
    .menu-text {
      font-size: 1rem;
      letter-spacing: 1px;
      border: 1px solid #919191;
      border-radius: 100rem;
      height: 2rem;
      color: #919191;
      padding: 0.5rem 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #191919;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background-color: #2f2f2f;
      }
    }
  }
}
</style>
