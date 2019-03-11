<template>
  <div class="header-wrapper">
    <van-row class="layout-wrapper">
      <van-col span="3">
        <van-icon name="arrow-left" class="back-icon" @click="backHistory"/>
      </van-col>
      <van-col span="13">
        <img  class="logo-img" src="../assets/logo.png"/>
      </van-col>
      <van-col span="8"></van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  methods: {
    backHistory() {
      window.history.go(-1);
    }
  }
};
</script>
<style lang="stylus" scoped>
.header-wrapper
  height: 50px;
  background-color: #262c36;
.back-icon
  float left;
  color: #ffffff;
  font-size 25px;
  height: 50px;
  line-height: 50px;
  padding-left 10px;
.logo-img
  float: left;
  padding-top 13px;
  width: 200px;
</style>
