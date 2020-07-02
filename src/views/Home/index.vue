<template>
  <div>
    <el-tag class="elButton" @click="drawer = true" type="info" style="margin-left: 16px;">M</el-tag>
    <el-drawer class="elDrawer" title="我是标题" :visible.sync="drawer" :with-header="false">
      <el-row>
        <el-col :span="24">
          <!-- <p class="user">
            <router-link class="user-link" to="/"><i class="iconfont icon-login01"></i> <span  class="login">登入</span></router-link>
            <router-link class="user-link" to="/"><i class="iconfont icon-zhucetianjiahaoyou"></i> <span  class="login">注册</span></router-link>
          </p>-->
          <p class="user">
            <router-link class="user-link" to="/">
              <i class="el-icon-user-solid" style="padding-right:10px;"></i>
              <span class="vip" title="个人主页">用户名用户名用</span>
              <span class="message">3</span>
            </router-link>
            <router-link class="user-link" to="/">
              <i class="el-icon-switch-button" style="padding-right:10px;"></i>
              <span class="login">注销</span>
            </router-link>
          </p>
          <el-menu default-active="2" class="el-menu-vertical-demo" text-color="#000">
            <router-link class="user-link" to="/blog">
              <el-menu-item index="1" class="drawer">
                <i class="iconfont icon-wenzhang"></i>
                <span slot="title">博客</span>
              </el-menu-item>
            </router-link>
            <router-link class="user-link" to="/message">
              <el-menu-item index="1" class="drawer">
                <i class="iconfont icon-liuyan"></i>
                <span slot="title">留言</span>
              </el-menu-item>
            </router-link>
            <router-link class="user-link" to="/blog">
              <el-menu-item index="1" class="drawer">
                <i class="iconfont icon-bianjibijishishouxie"></i>
                <span slot="title">简言</span>
              </el-menu-item>
            </router-link>
            <router-link class="user-link" to="/blog">
              <el-menu-item index="1" class="drawer">
                <i class="iconfont icon-youqinglianjie"></i>
                <span slot="title">友链</span>
              </el-menu-item>
            </router-link>
            <router-link class="user-link" to="/blog">
              <el-menu-item index="1" class="drawer">
                <i class="iconfont icon-guanyuwo"></i>
                <span slot="title">关于我</span>
              </el-menu-item>
            </router-link>
            <router-link class="user-link"  to="/">
              <el-menu-item index="3" disabled>
                <i class="el-icon-setting"></i>
                <span slot="title">后台管理</span>
              </el-menu-item>
            </router-link>
          </el-menu>
        </el-col>
      </el-row>
      <div class="drawerLog"></div>
    </el-drawer>
    <div class="home">
      <div class="content">
        <h2>
          <span>我的博文</span>
        </h2>
        <p class="easyMessage">
          所谓爱情，是对对自己最重要的人
          , 以慈悲的心保护他的想法。
        </p>
        <el-row class="blogsWarp" type="flex" justify="center">
          <el-col :md="16" :sm="22" :xs="24">
            <el-row :gutter="10">
              <el-col :md="{span:8,offset:0}" :sm="{span:7,offset:1}" :xs="{span:16,offset:4}">
                <div class="blogsBox">
                  <div class="image">
                    <img src="../../image/backgroundDefout.webp" />
                  </div>
                  <router-link to="/a">
                    <div class="iconBack">
                      <i class="iconfont">&#xe625;</i>
                    </div>
                  </router-link>
                </div>
                <div class="blogmessage">
                  <h4>世间的相遇，都是命运的安排</h4>
                  <span>2020年05月21日</span>
                  <p>如果有一天，我们有幸相遇，我会告诉你，这一切，都是命运的安排，我和你，注定要一起走完这一生。</p>
                  <router-link to="/">
                    <i class="iconfont icon-yuedu"></i> 点击阅读
                  </router-link>
                </div>
              </el-col>
              <el-col :md="{span:8,offset:0}" :sm="{span:7,offset:1}" :xs="{span:16,offset:4}">
                <div class="blogsBox">
                  <div class="image">
                    <img src="../../image/backgroundDefout.webp" />
                  </div>
                  <router-link to="/a">
                    <div class="iconBack">
                      <i class="iconfont">&#xe625;</i>
                    </div>
                  </router-link>
                </div>
                <div class="blogmessage">
                  <h4>世间的相遇，都是命运的安排</h4>
                  <span>2020年05月21日</span>
                  <p>如果有一天，我们有幸相遇，我会告诉你，这一切，都是命运的安排，我和你，注定要一起走完这一生。</p>
                  <router-link to="/">
                    <i class="iconfont icon-yuedu"></i> 点击阅读
                  </router-link>
                </div>
              </el-col>
              <el-col :md="{span:8,offset:0}" :sm="{span:7,offset:1}" :xs="{span:16,offset:4}">
                <div class="blogsBox">
                  <div class="image">
                    <img src="../../image/backgroundDefout.webp" />
                  </div>
                  <router-link to="/a">
                    <div class="iconBack">
                      <i class="iconfont">&#xe625;</i>
                    </div>
                  </router-link>
                </div>
                <div class="blogmessage">
                  <h4>世间的相遇，都是命运的安排</h4>
                  <span>2020年05月21日</span>
                  <p>如果有一天，我们有幸相遇，我会告诉你，这一切，都是命运的安排，我和你，注定要一起走完这一生。</p>
                  <router-link to="/">
                    <i class="iconfont icon-yuedu"></i> 点击阅读
                  </router-link>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="transparent">
        <el-row type="flex" justify="space-around">
          <el-col :md="{span:4,offset:0}" :sm="{span:8,offset:0}" :xs="{span:10,offset:0}">
            <router-link to="/">
              <div class="btn">关于博主</div>
            </router-link>
          </el-col>
          <el-col :md="{span:4,offset:0}" :sm="{span:8,offset:0}" :xs="{span:10,offset:0}">
            <router-link to="/">
              <div class="btn">友情链接</div>
            </router-link>
          </el-col>
        </el-row>
      </div>
      <div class="MineMessage">
        <h3>生鱼忧患 ， 死鱼安乐</h3>
        <span>熟能生巧 ， 勤能补拙 ， 静能生慧</span>
        <p>人们要是没有回忆就活不下去，但是只有回忆的话也活不下去。梦总是有会醒来的时候，不会醒的梦总有一天会变成悲伤</p>
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
  background-image: url("../../image/index.webp");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  color: #666;

  .content {
    background-color: #fff;
    text-align: center;
    padding-bottom: 150px;
    h2 {
      padding-top: 80px;
      font-size: 40px;
      letter-spacing: 5px;
      margin-bottom: 60px;
      span {
        padding-bottom: 30px;
        border-bottom: 3px solid #1cc4c4;
      }
    }
    .easyMessage {
      padding: 0 5px;
      box-sizing: border-box;
      color: #c1c1c1;
      max-width: 500px;
      margin: 0 auto;
    }
    p {
      line-height: 150%;
      color: #888;
    }
    .blogsWarp {
      margin: 30px auto 0px;
      .blogsBox {
        position: relative;
        height: 150px;
        margin: 10px auto 0px;
        overflow: hidden;
        .image {
          img {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 100%;
            transition: 0.5s all;
          }
          cursor: pointer;
        }
        .iconBack {
          cursor: pointer;
          position: absolute;
          top: -150px;
          left: 0;
          width: 100%;
          height: 150px;
          background-color: rgba(0, 0, 0, 0.5);
          transition: 0.5s all;
          text-align: center;
          line-height: 150px;
          i {
            font-size: 30px;
            color: #fff;
          }
        }
        &:hover img {
          transform: scale(1.5);
        }
        &:hover .iconBack {
          top: 0;
        }
      }
      .blogmessage {
        box-sizing: border-box;
        padding: 10px 10px 20px;
        text-align: left;
        background-color: #faf9f9;
        h4 {
          margin: 25px auto 20px;
          font-size: 15px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        p {
          margin: 25px auto 20px;
          height: 100px;
          overflow: hidden;
          text-overflow: ellipsis;
          text-indent: 28px;
          font-size: 13px;
        }
        span {
          color: #999;
          letter-spacing: 2px;
          font-size: 12px;
        }
        a {
          color: skyblue;
          font-size: 14px;
          &:hover {
            color: hotpink;
          }
        }
      }
    }
  }
  .transparent {
    height: 250px;
    .btn {
      height: 35px;
      margin-top: 110px;
      text-align: center;
      line-height: 35px;
      outline: solid #fff 1px;
      color: #fff;
      font-size: 18px;
      letter-spacing: 2px;
      min-width: 100px;
      transition: 0.5s all;
      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .MineMessage {
    padding: 100px 10px;
    background-color: #fff;
    text-align: center;
    border-bottom: dashed 1px #ccc;
    h3 {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 25px;
    }
    span {
      font-size: 16px;
    }
    p {
      margin-top: 45px;
      color: #888;
    }
  }
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
.iconfont {
  padding-right: 10px;
}

.drawer span {
  display: inline-block;
  width: 100%;
  font-size: 16px;
  color: #777;
}
.drawer span:hover {
  color: skyblue;
}
.drawerLog {
  position: absolute;
  width: 60%;
  height: 15%;
  background-image: url("../../components/Header/image/logo.png");
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  bottom: 20px;
  right: 10px;
}
.user {
  padding-right: 20px;
  text-align: right;
  color: #fff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 1);
  line-height: 45px;
  height: 60px;
  .login {
    padding-right: 20px;
  }
  .login:hover {
    color: #888;
    text-decoration: underline;
  }
  .vip {
    position: relative;
    vertical-align: top;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 60%;
    margin-right: 20px;
    color: skyblue;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    &:hover {
      text-decoration: underline;
    }
    + .message {
      position: absolute;
      width: 15px;
      height: 15px;
      line-height: 15px;
      text-align: center;
      border-radius: 50%;
      background-color: red;
      color: #fff;
      top: 5px;
      right: 105px;
    }
  }
  .user-link {
    outline: none;
  }
  @media (max-width: 767px) {
    // background-color: #bfa;
    padding-right: 5px;
    i {
      font-size: 14px;
    }
    .el-icon-user-solid {
      color: orange;
      text-shadow: 0 0 0;
    }

    .vip + .message {
      font-size: 10px;
      right: 70px;
    }
    span,
    a {
      font-size: 0;
    }
  }
}
</style>
