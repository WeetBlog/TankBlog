<template>
  <div class="foot">
    <el-row class="footBar">
      <el-col :span="20" :offset="2">
        <p class="footP">
          <i class="iconfont icon-youxiang email"></i>
          <a href="JavaScript:;">wanjunqing@aliyun.com</a>
        </p>
        <p class="footP">
          <i class="iconfont icon-github github"></i>
          <a href="https://github.com/Tank-MrOne" target="_blank">https://github.com/Tank-MrOne</a>
        </p>
        <p class="footP">
          <span class="footText1"></span>
          <span class="footText2"></span>
          <span class="footText3"></span>
          <span class="footText4 el-icon-user"></span>
          <span class="footText5"></span>
          <span class="footText6"></span>
          <span class="footText7"></span>
          <span class="footText8"></span>
        </p>
      </el-col>
    </el-row>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
  name: "Footer"
};
</script>



<style lang="less" scoped>
.foot {
  position: relative;
  margin-top: 10px;
  .footP {
    text-align: center;
    line-height: 30px;
    a {
      text-decoration: underline;
      &:hover {
        text-decoration: none;
        color: rgb(77, 181, 223);
      }
    }
    span {
      padding: 5px;
    }
    .email::after {
      color: #888;
      font-size: 14px;
      content: " 个人邮箱 : ";
    }
    .github::after {
      color: #888;
      font-size: 14px;
      content: " github :";
    }
    .footText1::after {
      content: "Copyright";
    }
    .footText2::after {
      content: "©";
    }
    .footText3::after {
      content: "2020-2021";
    }
    .footText4::after {
      content: "Tank";
    }
    .footText5::after {
      content: "All Rights";
    }
    .footText6::after {
      content: "Reserved";
    }
    .footText7::after {
      content: "V.2.1.0";
    }
    .footText8::after {
      content: "备案号 : 京ICP备20010489号-1";
    }
    @media (max-width: 767px){
      &:nth-child(3){
        margin-top: 20px;
        line-height: 150%;
      }
      span{
        padding: 2px;
        font-size: 12px;
        color: #ccc;
      }
    }
  }
}
</style>