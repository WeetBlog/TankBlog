<template>
  <div class="friends clearFix">
    <div class="title">
      <h3></h3>
      <p></p>
    </div>
    <el-row>
      <el-col
        style="height:100%;box-sizing: border-box; padding: 10px;"
        :xs="{span:22,offset:1}"
        :sm="{span:18,offset:3}"
        :md="{span:16,offset:4}"
      >
        <div class="description">
          <h4>链接申请说明</h4>
          <p>
            <span>
              <i class="el-icon-close"></i>经常宕机
            </span>
            <span>
              <i class="el-icon-close"></i>不合法规
            </span>
            <span>
              <i class="el-icon-close"></i>插边球站
            </span>
            <span>
              <i class="el-icon-close"></i>红标报毒
            </span>
            <span>
              <i class="el-icon-check"></i>原创优先
            </span>
            <span>
              <i class="el-icon-check"></i>技术优先
            </span>
          </p>
          <ul>
            <li>交换友链可发送邮件和留言板 ，邮箱链接如下</li>
            <li>名称：Mr One</li>
            <li>
              网址 ：
              <a href="https://www.wanjunqing.cn" target="_blank">https://www.wanjunqing.cn</a>
            </li>
            <li>
              邮箱 ：
              <a href="javascript:;">https://www.wanjunqin@aliyun.com</a>
            </li>
            <li>
              github ：
              <a
                href="https://github.com/Tank-MrOne"
                target="_blank"
              >https://github.com/Tank-MrOne</a>
            </li>
            <li>描述：我愿将歌化作舟，聆听朗朗的微甜</li>
          </ul>
          <div>! 申请提交后若无其它原因将在24小时内审核,如超过时间还未通过,请私信我.(各种额外因素)</div>
        </div>
      </el-col>
    </el-row>
    <el-row class="box">
      <el-col :xs="{span:22,offset:1}" :sm="{span:18,offset:3}" :md="{span:16,offset:4}">
        <el-row :gutter="10">
          <el-col class="friend" :xs="{span:12}" :sm="{span:8}" :md="{span:6}">
            <a href="https://www.wanjunqing.cn" target="_blank">
              <div class="friendBox">
                <div>
                  <img src="./image/friends.webp" />
                  <span>XXXXX</span>
                </div>
                <p>一个完美喜欢旅游，去了解不一样的人文情怀！</p>
              </div>
            </a>
          </el-col>
          <el-col class="friend" :xs="{span:12}" :sm="{span:8}" :md="{span:6}">
            <a href="https://www.wanjunqing.cn" target="_blank">
              <div class="friendBox">
                <div>
                  <img src="./image/friends.webp" />
                  <span>XXXXX</span>
                </div>
                <p>一个完美喜欢旅游，去了解不一样的人文情怀！</p>
              </div>
            </a>
          </el-col>
          <el-col class="friend" :xs="{span:12}" :sm="{span:8}" :md="{span:6}">
            <a href="https://www.wanjunqing.cn" target="_blank">
              <div class="friendBox">
                <div>
                  <img src="./image/friends.webp" />
                  <span>XXXXX</span>
                </div>
                <p>一个完美喜欢旅游，去了解不一样的人文情怀！</p>
              </div>
            </a>
          </el-col>
          <el-col class="friend" :xs="{span:12}" :sm="{span:8}" :md="{span:6}">
            <a href="https://www.wanjunqing.cn" target="_blank">
              <div class="friendBox">
                <div>
                  <img src="./image/friends.webp" />
                  <span>XXXXX</span>
                </div>
                <p>一个完美喜欢旅游，去了解不一样的人文情怀！</p>
              </div>
            </a>
          </el-col>
          <el-col class="friend" :xs="{span:12}" :sm="{span:8}" :md="{span:6}">
            <a href="https://www.wanjunqing.cn" target="_blank">
              <div class="friendBox">
                <div>
                  <img src="./image/friends.webp" />
                  <span>XXXXX</span>
                </div>
                <p>一个完美喜欢旅游，去了解不一样的人文情怀！</p>
              </div>
            </a>
          </el-col>
          <el-col class="friend" :xs="{span:12}" :sm="{span:8}" :md="{span:6}">
            <a href="https://www.wanjunqing.cn" target="_blank">
              <div class="friendBox">
                <div>
                  <img src="./image/friends.webp" />
                  <span>XXXXX</span>
                </div>
                <p>一个完美喜欢旅游，去了解不一样的人文情怀！</p>
              </div>
            </a>
          </el-col>
          <el-col class="friend" :xs="{span:12}" :sm="{span:8}" :md="{span:6}">
            <a href="https://www.wanjunqing.cn" target="_blank">
              <div class="friendBox">
                <div>
                  <img src="./image/friends.webp" />
                  <span>XXXXX</span>
                </div>
                <p>一个完美喜欢旅游，去了解不一样的人文情怀！</p>
              </div>
            </a>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
  name: ""
};
</script>



<style lang="less" scoped>
.friends {
  background-image: url("./image/friends.webp");
  background-attachment: fixed;
  .title {
    height: 200px;
    background-image: linear-gradient(#777, rgba(255, 255, 255, 0.5));
    h3 {
      color: #fff;
      text-align: center;
      font-size: 50px;
      padding-top: 50px;
    }
    p {
      text-align: center;
      letter-spacing: 3px;
      color: #fff;
      font-size: 16px;
      margin-top: 50px;
    }
    h3::before {
      content: "Tank";
    }
    p:before {
      content: "我愿将歌化作舟，聆听朗朗的微甜";
    }
  }
  .description {
    border-radius: 2px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    transition: 0.4s all;
    &:hover {
      background-color: rgba(255, 255, 255, 0.85);
      a {
        color: orangered;
      }
    }
    h4 {
      font-size: 30px;
      margin: 20px auto;
      &::before {
        content: "";
        border-left: solid 5px #000;
        padding-right: 30px;
      }
    }
    p {
      span {
        padding-right: 20px;
        font-size: 16px;
        @media (max-width: 767px) {
          font-size: 15px;
        }
      }
      .el-icon-close {
        color: red;
        padding-right: 5px;
        font-weight: bold;
      }
      .el-icon-check {
        color: green;
        padding-right: 5px;
        font-weight: bold;
      }
    }
    ul {
      color: #333;
      margin: 30px auto;
      li {
        line-height: 40px;
        font-size: 15px;
        a {
          font-family: tank;
          letter-spacing: 1px;
          color: #fff;
          text-decoration: underline;
          &:hover {
            color: #000;
          }
        }
      }
    }
    div {
      padding: 5px;
      color: #fff;
      border-radius: 2px;
      background-color: rgba(236, 66, 4, 0.6);
    }
  }
  .box {
    .friendBox {
      background-color: rgba(255, 255, 255, 0.5);
      box-sizing: border-box;
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      transition: 0.3s all;
      &:hover {
        background-color: rgba(255, 255, 255, 0.85);
      }
      div {
          line-height: 40px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 17px;
        img {
          vertical-align: middle;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
          margin-right: 10px;
        }
      }
      p {
          margin-top: 10px;
        line-height: 150%;
        font-size: 13px;
        color: #555;
      }
    }
  }
}
</style>