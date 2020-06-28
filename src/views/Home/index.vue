<template>
  <div style="height:100%">
    <el-tag class="elButton" @click="drawer = true" type="info" style="margin-left: 16px;">M</el-tag>
    <el-drawer class="elDrawer" title="我是标题" :visible.sync="drawer" :with-header="false">
      <span>我来啦!</span>
    </el-drawer>
    <div class="home">
      <div class="top">123</div>
      <div class="content">
        123
        <br />123
        <br />123
        <br />123
        <br />123
        <br />123
        <br />123
        <br />123
        <br />123
        <br />
      </div>
    </div>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
  name: "Home",
  data() {
    return {
      drawer: false
    };
  }
};
</script>



<style lang="less" scoped>
.home {
  position: relative;
  z-index: 0;
  height: 100%;
  background-color: #bfa;
}
.elButton {
  position: fixed;
  z-index: 1;
  top: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  line-height: 27px;
  text-align: center;
  transition: 0.3s all;
  cursor: pointer;

  animation-name: elmenu;
  animation-duration: 1s;
  animation-fill-mode: both;
  @keyframes elmenu {
    from {
      transform: scale(0.1);
      background-color: #000;
    }
    to {
      transform: scale(1);
      background-color: #fff;
    }
  }
}

.elButton:hover::after {
  content: " E N U";
}
.elButton:hover {
  border-radius: 5px;
  width: 80px;
}
</style>
