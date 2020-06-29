<template>
  <div>
    <el-row class="topBar">
      <el-col :span="20" :offset="2">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          text-color="#fff"
          background-color="#777"
          active-text-color="#ffd04b"
        >
          <el-menu-item disabled style="opacity:1;cursor:default;">
            <h1 class="h1"></h1>
          </el-menu-item>
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">博客</el-menu-item>
          <el-menu-item index="3">留言</el-menu-item>
          <el-menu-item index="4">简言</el-menu-item>
          <el-menu-item index="5">友链</el-menu-item>
          <el-menu-item index="6">关于我</el-menu-item>
          <el-menu-item index="7" disabled>后台管理</el-menu-item>
          <!-- <div class="topHide">
            <a href="##" class="login iconfont icon-login01"><span class="tank"> 登入</span></a>
            <a href="##" class="register"><span class="tank"><i class="iconfont icon-zhucetianjiahaoyou"></i> 注册</span></a>
          </div> -->
          <div class="topHide">
             <a href="##" title="个人主页" class="user el-icon-s-custom"><span class="tank"> 用户名用户名用户名用户名用户名用户名用户名</span></a>
             <a href="##" title="退出登入" class="quit el-icon-switch-button"></a>
             <div class="message">3</div>
          </div>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1"
    };
  },
};
</script>



<style scoped>
.h1 {
  width: 130px;
  height: 60px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: url("./image/logo.png");
  margin-right: 20px;
}
.topBar {
  background-color: #777;
  height: 60px;
  margin-bottom: 10px;
}
.topHide {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0px;
  line-height: 30px;
}
.topHide .login {
  padding-right: 20px;
}
.topHide .login,
.topHide .register {
  color: #fff;
}
.topHide .login:hover,
.topHide .register:hover {
  color: #00a0ff;
}
.topHide .user{
    display: inline-block;
    vertical-align: middle;
    max-width: 150px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #FFCE53;
}
.topHide .user:hover{
    color: #fff;
    text-decoration: underline;
}
.topHide .quit{
    margin-left: 30px;
    color: #fff;
    display: inline-block;
    vertical-align: middle;
}
.topHide .quit:hover{
    color: rgb(241, 158, 158);
}

.topHide .message{
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: red;
    left: -10px;
    top: 0px;
    border-radius:50% ;
    font-size: 12px;
    text-align: center;
    line-height: 15px;
    color: #fff;
}
</style>