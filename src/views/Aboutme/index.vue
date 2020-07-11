<template>
  <el-row>
    <el-col
      style="height:100%;box-sizing: border-box; padding: 10px;"
      :xs="{span:22,offset:1}"
      :sm="{span:18,offset:3}"
      :md="{span:16,offset:4}"
    >
      <main>
        <div class="message">
          <h3>关于我</h3>
          <p>在我成为一名前端攻城狮之前，我曾是一名健身教练，那是因为在海南服役后，成为一位教练是我最想做的一件事，但现实和内幕往往和想象中的截然不同，因此，我做了一个重要的决定，从此以后的生活便与代码息息相关，我的爱好有两项，一项是运动，一项则是计算机，我很幸运我从事的工作都和自己的爱好有关，在成为程序员后，我平常喜欢逛逛网上的贴吧，几乎每天都要打开掘金看看里面的大咖们的分享，不得不说程序员的道路并没有那么简单，得不断的去学习，巩固，专研，这几年的学习里几乎每天都会发掘一点点小技巧，新技能，在我看来，程序员的快乐也就这么简单</p>
          <p>可以通过以下方式联系到我 ：</p>
          <p>微信号 : wjq651201314</p>
          <p>
            邮箱 ：
            <a href="javascript:;">wanjunqing@aliyun.com</a>
          </p>
        </div>
        <div class="message">
          <h3>关于本站</h3>
          <p>本站最早版本制作时间为2018年</p>
          <p>本站最新版本最后制作时间为2020年6月25日至今，（因疫情在家编写）</p>
          <p>相比之前版本删除了许多杂乱动画效果，往后也打算继续简洁化</p>
          <p>【本站结构】</p>
          <p>
            前端博客:
            <span>采用的是 Vue 框架 + ElementUI + Vuex数据管理 + Vue-Router跳转</span> ,
          </p>
          <p>
            前端管理 ：
            <span>采用的是 React + Antd + Axios + ES6 + Webpack + Echarts</span>
          </p>
          <p>
            后端 ：
            <span>采用的是 Node + Express + mongoose + Tomcat</span>
          </p>
          <p>本站采用百度云的服务器BCC和存储对象OSS</p>
        </div>
        <div class="message">
          <h3>关于版权</h3>
          <p>本站采用「 署名-非商业性使用 4.0 国际 (CC BY-NC 4.0)」创作共享协议。 只要在使用时注明出处，那么您可以可以对本站所有原创内容进行转载、节选、二次创作，但是您不得对其用于商业目的。</p>
        </div>
        <div class="message">
          <h3>特别说明</h3>
          <p>本站文章仅代表个人观点，和任何组织或个人无关。</p>
          <p>本站前端开发代码没有考虑对IE浏览器的兼容。</p>
          <p>用户邮箱仅作回复消息用，不对外使用。</p>
        </div>
      </main>
    </el-col>
  </el-row>
</template>



<script type="text/ecmascript-6">
export default {
  name: ""
};

// 传入一个参数 n
function getFactorial(n) {
  // 判断n 是否小于 1
  if (n <= 1) {
    return 1;
  }
  //返回 n * 继续调用这个函数的返回值
  return n * getFactorial(n - 1);
}
console.log(getFactorial(5)); // 5! = 4! * 

</script>



<style lang="less" scoped>
.el-row {
  background-image: url("./image/aboutme.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
main {
  width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.6);
  transition: all 0.4s;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
main:hover {
  background-color: #ffffff;
}
main .message {
  margin-bottom: 50px;
}
main .message h3 {
  margin: 30px 0;
  font-size: 25px;
  text-indent: 20px;
  box-sizing: border-box;
  border-left: solid 3px #6b441d;
  font-family: tank;
}
main .message p {
  line-height: 200%;
  font-size: 15px;
  margin: 20px 0;
}
main .message p span {
  color: tomato;
}
main .message p a {
  color: deepskyblue;
}
main .friendsHelp h3 {
  margin: 20px 0;
  border-left: solid 3px #6b441d;
  text-indent: 20px;
  font-size: 25px;
}
main .friendsHelp p {
  line-height: 80px;
  letter-spacing: 2px;
  color: #333;
}
main .friendsHelp p .iconfont:nth-child(-n + 4) {
  color: red;
}
main .friendsHelp p .iconfont:nth-child(n + 5) {
  color: green;
}
main .friendsHelp div {
  color: #666;
  text-indent: 20px;
  line-height: 200%;
}
</style>