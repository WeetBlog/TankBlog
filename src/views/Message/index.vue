<template>
  <el-row class="boardWarp">
    <el-col
      style="height:100%;box-sizing: border-box; padding: 10px;"
      :xs="{span:22,offset:1}"
      :sm="{span:18,offset:3}"
      :md="{span:16,offset:4}"
    >
      <div class="infinite-list">
        <div class="board">
          <h1></h1>
          <p></p>
          <div class="textarea">
            <textarea placeholder="这里输入，您想对博主说......"></textarea>
          </div>

          <button type="button">发表留言</button>
          <el-divider>
            <span class="divider">留言内容</span>
          </el-divider>
        </div>

        <ul v-infinite-scroll="load">
          <li v-for="(i,index) in count" class="infinite-list-item" :key="index">
            <el-card>
              <div class="left">
                <img src="./image/board.webp" />
              </div>
              <div class="right">
                <div>
                  <span class="name">{{ i }}</span>
                </div>
                <span class="time">- 2020-07-02 -</span>
                <p>第{{i}}条留言,条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言条留言</p>
              </div>
            </el-card>
          </li>
        </ul>

        
      </div>
    </el-col>
  </el-row>
</template>




<script type="text/ecmascript-6">
export default {
  name: "Message",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    load() {
      this.count += 20;
    }
  }
};
</script>



<style lang="less" scoped>
.boardWarp {
  height: 200%;
  background-image: url("./image/board.webp");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  .infinite-list {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 2px;
    box-sizing: border-box;
    padding: 10px;
    .board {
      width: 100%;
      transition: 0.3s all;
      border-radius: 3px;
      h1 {
        text-align: center;
        font-size: 60px;
        font-family: "微软雅黑", "Courier New", Courier, monospace;
        padding: 50px;
        color: #fff;
        text-shadow: 0 0 10px rgba(0, 150, 136, 0.7);
        letter-spacing: 10px;
      }
      p {
        text-align: center;
        color: #009688;
        font-size: 20px;
        letter-spacing: 2px;
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
      }
      .textarea {
        margin: 50px auto 10px;
        width: 100%;
        border: solid 1px #000;
        box-sizing: border-box;
        padding: 10px;
        border-radius: 2px;
        transition: 0.3s all;
        &:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }
        textarea {
          outline: none;
          border: none;
          width: 100%;
          background-color: transparent;
          font-size: 16px;
          letter-spacing: 1px;
          height: 100px;
          resize: none;
          color: #fff;
          @media (max-width: 767px) {
            height: 50px;
          }
        }
      }
      button {
        border: none;
        outline: none;
        padding: 10px 30px;
        color: #fff;
        background-color: #009688;
        border-radius: 2px;
        cursor: pointer;
        transition: 0.3s all;
        font-size: 12px;
        letter-spacing: 1px;
        &:hover {
          background-color: #13665e;
        }
      }
      p::before {
        content: "All for one , one for all.";
      }
      h1::before {
        content: "留言板";
      }
    }
    ul {
      flex: 1;
      overflow: auto;
    }
    .el-divider {
      margin: 30px auto 50px;
    }
    .el-divider__text {
      padding: 5px 30px;
      border-radius: 5px;
      color: #777;
      letter-spacing: 2px;
      font-family: "Courier New", Courier, monospace;
    }
    .infinite-list-item {
      margin: 10px auto;
      .el-card {
        position: relative;
        background-color: transparent;
        transition: 0.3s all;
        &:hover {
          background-color: #fff;
        }
        .el-card__body {
        }
        .left {
          position: absolute;
        }
        .left img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .right {
          box-sizing: border-box;
          padding-left: 60px;
          div {
            max-width: 350px;
            line-height: 40px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            .name {
              font-size: 25px;
              padding-right: 20px;
              color: rgb(24, 11, 99);
            }
          }

          p {
            letter-spacing: 1px;
            line-height: 150%;
            margin-top: 10px;
            text-indent: 15px;
            font-size: 15px;
          }
        }
      }
    }
  }
}
textarea:-ms-input-placeholder {
  color: #fff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
} /* Internet Explorer 10+ */

textarea::-webkit-input-placeholder {
  color: #fff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
} /* WebKit browsers */

textarea::-moz-placeholder {
  color: #fff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
} /* Mozilla Firefox 4 to 18 */

textarea:-moz-placeholder {
  color: #fff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
</style>