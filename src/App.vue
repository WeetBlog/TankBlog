<template>
  <div :class=" $route.meta.isHide ? 'app' : ''">
    <Header v-if="!$route.meta.isHide" />
    <div class="homePage" v-else>
      <div class="blogTitle">
        <h1></h1>
        <p></p>
        <router-link tag="button" to="/a">Welcome To</router-link>
      </div>
    </div>
    <router-view></router-view>
    <Footer :id=" $route.meta.isHide ? 'footer' : ''" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="less" scope>
.app {
  height: 100%;
  background-image: url("./image/backgroundDefout.webp");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  overflow: auto;
}
.homePage {
  height: 100%;
  .blogTitle {
    position: absolute;
    z-index: 0;
    margin: 0 auto;
    left: 0;
    right: 0;
    text-align: center;
    top: 50px;
    color: #fff;
    h1::after {
      content: "Tank";
      font-size: 45px;
      letter-spacing: 5px;
      text-shadow: 0 0 10px rgba(0,0,0,0.3);
    }
    p::after {
      content: "我愿将歌化作舟，聆听朗朗的微甜";
      text-shadow: 0 0 10px rgba(0,0,0,0.3);
    }
    p {
      margin: 15px auto 30px;
      letter-spacing: 6px;
      font-size: 15px;
    }
    button {
      background-color: #00c7c7;
      border: none;
      width: 150px;
      height: 30px;
      border-radius: 4px;
      color: #fff;
      cursor: pointer;
      outline: none;
    }
    button:hover {
      background-color: #777;
    }
    animation-name: headerblog;
    animation-duration: 1s;
    animation-fill-mode: both;
    @keyframes headerblog {
      from {
        transform: scale(0.1);
      }
      to {
        transform: scale(1);
      }
    }
  }

}
#footer {
  background-color: #fff;
  margin-top: 0px;
  padding-top: 10px;
}
</style>
