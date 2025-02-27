<template>
  <div class="home-container">
    <!-- 首页 -->
    <HomePageView />
    <!-- 关于我们 -->
    <AboutUsView />
    <!-- 团队介绍 -->
    <TeamIntroductionView />
    <!-- 业务涵盖页 -->
     <BusinessCoverage />
    <!-- 业务介绍页 * 4 -->
    <BusinessOverView />
    <!-- 作品介绍 -->
    <PortfolioShowcaseView />
    <!-- 联系我们 -->
    <ContactUsView />
  </div>
</template>

<script setup>
import BusinessCoverage from './SubView/BusinessCoverage.vue'
import BusinessOverView from './SubView/BusinessOverView.vue'
import HomePageView from './SubView/HomePageView.vue'
import AboutUsView from './SubView/AboutUsView.vue'
import TeamIntroductionView from './SubView/TeamIntroductionView.vue'
import ContactUsView from './SubView/ContactUsView.vue'
import PortfolioShowcaseView from './SubView/PortfolioShowcaseView.vue'
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
