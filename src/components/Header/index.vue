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
          <el-menu-item class="topList" index="1">首页</el-menu-item>
          <el-menu-item class="topList" index="2">博客</el-menu-item>
          <el-menu-item class="topList" index="3">留言</el-menu-item>
          <el-menu-item class="topList" index="4">简言</el-menu-item>
          <el-menu-item class="topList" index="5">友链</el-menu-item>
          <el-menu-item class="topList" index="6">关于我</el-menu-item>
          <el-menu-item class="topList" index="7" disabled>后台管理</el-menu-item>
          <!-- <div class="topHide">
            <a href="##" class="login iconfont icon-login01"><span class="tank"> 登入</span></a>
            <a href="##" class="register"><span class="tank"><i class="iconfont icon-zhucetianjiahaoyou"></i> 注册</span></a>
          </div>-->
          <div class="topHide">
            <a href="##" title="个人主页" class="user el-icon-s-custom">
              <span class="tank">用户名用户名用户名用户名用户名用户名用户名</span>
            </a>
            <a href="##" title="退出登入" class="quit el-icon-switch-button"></a>
            <div class="message">3</div>
          </div>
          <div class="menuTop">
            <el-button @click="drawer = true" class="menuBtn">
              <i class="iconfont icon-caidan"></i>
            </el-button>

            <el-drawer
              class="drawer"
              :visible.sync="drawer"
              direction="ttb"
              size="8%"
              :with-header="false"
            >
              <el-row type="flex" justify="space-around">
                <el-col :span="3">
                  <router-link to="/">
                    <i class="iconfont icon-zhuye"></i>
                    <p>Home</p>
                  </router-link>
                </el-col>
                <el-col :span="3">
                  <router-link to="/">
                    <i class="iconfont icon-wenzhang_huaban"></i>
                    <p>Blogs</p>
                  </router-link>
                </el-col>
                <el-col :span="3">
                  <router-link to="/">
                    <i class="iconfont icon-liuyan"></i>
                    <p>Message</p>
                  </router-link>
                </el-col>
                <el-col :span="3">
                  <router-link to="/">
                    <i class="iconfont icon-bianjibijishishouxie"></i>
                    <p>Record</p>
                  </router-link>
                </el-col>
                <el-col :span="3">
                  <router-link to="/">
                    <i class="iconfont icon-youqinglianjie"></i>
                    <p>Friends</p>
                  </router-link>
                </el-col>
                <el-col :span="3">
                  <router-link to="/">
                    <i class="el-icon-user"></i>
                    <p>Mine</p>
                  </router-link>
                </el-col>
                <el-col :span="3">
                  <router-link tag="button" disabled class="disabled" to="/">
                    <i class="el-icon-setting"></i>
                    <p>Setting</p>
                  </router-link>
                </el-col>
              </el-row>
            </el-drawer>
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
      activeIndex: "1",
      drawer: false
    };
  }
};
</script>



<style lang="less" scoped>
.topBar {
  background-color: #777;
  height: 60px;
  margin-bottom: 5px;
  .h1 {
    width: 130px;
    height: 60px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url("./image/logo.png");
    margin-right: 20px;
  }
  .topHide {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
    line-height: 30px;
    .login {
      padding-right: 20px;
    }
    .login,
    .register {
      color: #fff;
      &:hover {
        color: #00a0ff;
      }
    }
    .user {
      display: inline-block;
      vertical-align: middle;
      max-width: 150px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: #ffce53;
      &:hover {
        color: #fff;
        text-decoration: underline;
      }
    }
    .quit {
      margin-left: 30px;
      color: #fff;
      display: inline-block;
      vertical-align: middle;
      &:hover {
        color: rgb(241, 158, 158);
      }
    }
    .message {
      position: absolute;
      width: 15px;
      height: 15px;
      background-color: red;
      left: -10px;
      top: 0px;
      border-radius: 50%;
      font-size: 12px;
      text-align: center;
      line-height: 15px;
      color: #fff;
    }
  }
  .menuTop {
    display: none;
  }
  @media (max-width: 1100px) {
    .el-menu-item.topList {
      display: none;
    }
    .tank {
      font-size: 0;
    }
    .menuTop {
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 100px;
      margin: auto;
      height: 15px;
      .menuBtn {
        width: 15px;
        height: 15px;
        padding: 0;
        background-color: transparent;
        outline: none;
        border: none;
        .iconfont {
          font-size: 15px;
          color: #fff;
        }
      }
      .drawer {
        text-align: center;
        .el-row {
          margin-top: 10px;
          
          i {
            font-size: 25px;
          }
          p {
            margin-top: 5px;
            font-size: 12px;
            color: #777;
          }
          .disabled{
            outline: none;
            background-color: transparent;
            border: none;
            opacity: 0.3;
            cursor: no-drop ;
          }
        }
      }
    }
  }
}
</style>