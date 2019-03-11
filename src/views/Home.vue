<template>
  <div class="home">
    <InspectorHeader/>
    <div class="main-container">
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import InspectorHeader from "@/layout/Header";
export default {
  name: "home",
  components: {
    InspectorHeader
  }
};
</script>
<style lang="stylus" scoped>
.main-container
  padding-bottom: 164px;
  background: #f5f6fa url("../assets/footer_logo.png") no-repeat;
  background-size: 216px 28px
  background-position: center bottom 56px
  .main-content
    background: #f5f6fa;
    min-height: 600px;
</style>
