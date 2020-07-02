<template>
  <div class="blog">
    <div class="leftBlog">
      <div class="barBtn">
        <el-button @click="changeIsCollapse" v-if="isCollapse" class="btn">
          <i class="iconfont icon-zhankai"></i>
        </el-button>
        <el-button @click="changeIsCollapse" v-else class="shouBtn btn">
          <i class="iconfont icon-zhankaicaidan"></i>
          收起
        </el-button>
      </div>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo leftBar" :collapse="isCollapse">
        <el-menu-item index="1">
          <i class="iconfont icon-all"></i>
          <span>所有博文</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="iconfont icon-jishu"></i>
          <span>学习技巧</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="iconfont icon-zhaiyao"></i>
          <span>精选摘要</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="iconfont icon-shenghuo-"></i>
          <span>生活记录</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="iconfont icon-qita"></i>
          <span>其他</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="rightBlog">
      <el-table
        v-if="screenWidth > 767"
        :data="tableData"
        style="width: 100%;"
        height="100%"
        @row-click="clickRow"
      >
        <el-table-column prop="title" label="Title" width="300" class="titleTab">
          <template slot-scope="scope">
            <div class="titleTab">
              <i class="iconfont icon-wenzhang"></i>
              <span style="margin-left: 10px">{{ scope.row.title }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="overview" label="Overview"></el-table-column>
        <el-table-column prop="date" label="Date" width="300"></el-table-column>
      </el-table>
      <el-table v-else :data="tableData" style="width: 100%;" height="100%" @row-click="clickRow">
        <el-table-column prop="title" label="Title" class="titleTab">
          <template slot-scope="scope">
            <div class="titleTab">
              <i class="iconfont icon-wenzhang"></i>
              <span style="margin-left: 10px">{{ scope.row.title }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="Date" width="100"></el-table-column>
      </el-table>
      <div class="contentWarp" :class="contentWidth" ref="contentWarp">
        <div class="title">
          博客的标题
          博客的标题博客的标题博客的标题博客的标题博客的标题博客的标题博客的标题博客的标题博客的标题博客的标题博客的标题博客的标题博客的标题
          <div class="close el-icon-close" @click="clickClose">
            <div class="closeText">关闭</div>
          </div>
        </div>
        <div class="warp">
          <div class="warpIn">
            <div class="content">
              <div class="userMessage">
                <div class="image">
                  <img src="./image/blog.webp" alt />
                  <span>博主：</span>
                  <span class="blogName">TankTankTankTankTankTankTankTankTankTankTankTankTank</span>
                </div>

                <div class="tag">
                  <el-tag type="success" size="mini">个人</el-tag>
                  <el-tag size="mini">生后记录</el-tag>
                  <div class="see">
                    <i class="el-icon-view">123123123123</i>
                    <i v-if="starFlag" @click="collection" class="el-icon-star-off">收藏</i>
                    <i v-else @click="collection" class="el-icon-star-on">取消收藏</i>
                  </div>
                </div>

                <div class="message">
                  <div class="say">博文简述：</div>
                  <p>这里都是简短的内容这里都是简短的内容这里都是简短的内容这里都是简短的内容这里都是简短的内容这里都是简短的内容这里都是简短的内容这里都是简短的内容这里都是简短的内容这里都是简短的内容这里都是简短的内容这里都是简短的内容这里都是简短的内容这里都是简短的内容这里都是简短的内容这里都是简短的内容这里都是简短的内容这里都是简短的内容这里都是简短的内容这里都是简短的内容这里都是简短的内容</p>
                </div>
              </div>
              <el-divider>
                <i class="el-icon-time"></i> 2020-06-30
              </el-divider>
              <div class="blogText">
                <p>
                  唧唧复唧唧，木兰当户织。不闻机杼声，唯闻女叹息。
                  <img src="./image/blog.webp" />
                </p>
                <p>问女何所思，问女何所忆。女亦无所思，女亦无所忆。昨夜见军帖，可汗大点兵，军书十二卷，卷卷有爷名。阿爷无大儿，木兰无长兄，愿为市鞍马，从此替爷征。</p>
                <p>东市买骏马，西市买鞍鞯，南市买辔头，北市买长鞭。旦辞爷娘去，暮宿黄河边，不闻爷娘唤女声，但闻黄河流水鸣溅溅。旦辞黄河去，暮至黑山头，不闻爷娘唤女声，但闻燕山胡骑鸣啾啾。</p>
                <p>
                  万里赴戎机，关山度若飞。朔气传金柝，寒光照铁衣。将军百战死，壮士十年归。
                  <img src="./image/blog.webp" />
                </p>
                <p>归来见天子，天子坐明堂。策勋十二转，赏赐百千强。可汗问所欲，木兰不用尚书郎，愿驰千里足，送儿还故乡。</p>
                <p>爷娘闻女来，出郭相扶将；阿姊闻妹来，当户理红妆；小弟闻姊来，磨刀霍霍向猪羊。开我东阁门，坐我西阁床，脱我战时袍，著我旧时裳。当窗理云鬓，对镜帖花黄。出门看火伴，火伴皆惊忙：同行十二年，不知木兰是女郎。</p>
                <p>雄兔脚扑朔，雌兔眼迷离；双兔傍地走，安能辨我是雄雌？</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
  name: "Blog",
  data() {
    return {
      screenWidth: document.body.clientWidth,
      isCollapse: true,
      contentWidth: "contentHide",
      starFlag: false,
      tableData: [
        {
          title: "王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎",
          overview:
            "上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄",
          date: "2016-05-02"
        },
        {
          title: "王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎",
          overview: "上海市普陀区金沙江路 1518 弄",
          date: "2016-05-02"
        },
        {
          title: "王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎",
          overview: "上海市普陀区金沙江路 1518 弄",
          date: "2016-05-02"
        }
      ]
    };
  },
  mounted() {
    this.$bus.$emit("changeIndex", "2");
  },
  methods: {
    changeIsCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    clickRow(row) {
      console.log(row);
      this.contentWidth = "contentShow";
    },
    clickClose() {
      this.contentWidth = "contentHide";
    },
    collection() {
      this.starFlag = !this.starFlag;
      this.$confirm("您需要登入后才能收藏该博文,是否进入登入页面", "您好", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "info"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>



<style lang="less" scoped>
.blog {
  box-sizing: border-box;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  background-image: url("./image/blog.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .leftBlog {
    background-color: rgba(0, 0, 0, 0.5);
    .barBtn {
      i {
        padding-right: 10px;
      }
      .btn {
        background-color: transparent;
        border: none;
        outline: none;
        padding: 0;
        width: 65px;
        height: 65px;
        background-color: orangered;
        transition: 0.3s all ease-in;
        color: #fff;
        border-radius: 0;
        font-size: 16px;
        @media (max-width: 767px) {
          display: none;
        }
      }
      .shouBtn {
        width: 200px;
        transition: 0.3s all ease-in;
        box-sizing: border-box;
      }
    }
    .leftBar {
      i {
        color: #fff;
        padding-right: 20px;
      }
      span {
        font-size: 16px;
        color: #fff;
      }
    }
    .el-menu-item:active,
    .el-menu-item:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
    .el-menu--collapse {
      height: 100%;
      background-color: transparent;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
      height: 100%;
      background-color: transparent;
    }
  }
  .rightBlog {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    /deep/.el-table,
    /deep/.el-table__expanded-cell {
      background-color: transparent;
    }
    /deep/.el-table th {
      color: #fff;
      font-size: 17px;
      background-color: rgba(0, 0, 0, 0.5);
    }

    /deep/.el-table tr {
      font-size: 16px;
      background-color: transparent;
      cursor: pointer;
    }
    /deep/.el-table .cell {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .titleTab {
      i {
        font-size: 14px;
        color: #fff;
        background: #777;
        border-radius: 50%;
        padding: 5px;
      }

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .contentWarp {
      position: fixed;
      max-height: 95%;
      overflow: auto;
      z-index: 1;
      @media (max-width: 767px) {
        top: 0px;
        position: absolute;
      }
      top: 60px;
      right: 0;
      height: 100%;
      background-color: #eeeeee;
      transition: 0.3s all;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      .title {
        width: 100%;
        position: absolute;
        z-index: 2;
        background-color: #fff;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        font-weight: bold;
        letter-spacing: 2px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 22px;
        @media (max-width: 767px) {
          font-size: 14px;
        }
        box-sizing: border-box;
        padding: 15px 100px 15px 10px;
        border-top: 1px solid rgba(0, 0, 0, 0.5);
        .close {
          cursor: pointer;
          position: absolute;
          top: 50%;
          border-radius: 2px;
          transform: translateY(-50%);
          text-align: center;
          line-height: 30px;
          right: 10px;
          width: 30px;
          height: 30px;
          color: #999;
          &:hover {
            background-color: #ccc;
            color: #fff;
          }
          &:hover .closeText {
            display: block;
          }
          .closeText {
            position: absolute;
            display: none;
            top: 50%;
            transform: translateY(-50%);
            font-size: 12px;
            right: 35px;
            color: #999;
          }
        }
      }
      .warp {
        position: absolute;
        width: 100%;
        height: 98%;
        overflow: auto;
        padding-top: 60px;
        box-sizing: border-box;
        .warpIn {
          height: 100%;
          box-sizing: border-box;
          overflow: auto;
          box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
          margin: 10px;
          padding: 10px;
          background-color: #fff;
          border-radius: 3px;
          .content {
            .userMessage {
              position: relative;
              overflow: hidden;
              .image {
                color: #888;
                padding-right: 100px;
                text-overflow: ellipsis;
                overflow: hidden;
                @media (min-width: 768px) {
                  max-width: 400px;
                }
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                img {
                  width: 50px;
                  height: 50px;
                  border-radius: 50%;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                  margin-right: 20px;
                }
                .blogName {
                  color: skyblue;
                  font-size: 16px;
                }
              }
              .tag {
                text-align: right;
                position: absolute;
                max-width: 200px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                right: 10px;
                top: 0;
                .el-tag {
                  margin-left: 15px;
                }
                .see {
                  margin-top: 15px;
                  @media (max-width: 767px) {
                    margin-top: 3px;
                  }

                  i {
                    font-size: 12px;
                    cursor: pointer;
                    color: #777;
                    margin-left: 20px;
                    margin-right: 5px;
                  }
                }
              }
              .message {
                margin-top: 10px;
                font-family: "Courier New", Courier, monospace;
                line-height: 150%;
                font-size: 13px;
                .say {
                  font-size: 15px;
                  display: block;
                  font-weight: bold;
                  color: chocolate;
                }
                p {
                  text-indent: 26px;
                }
              }
            }
            .blogText {
              font-size: 13px;
              line-height: 150%;
              font-family: "Courier New", Courier, monospace;
              p {
                text-indent: 26px;
                line-height: 200%;
                img {
                  width: 100%;
                  border-radius: 5px;
                  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
                }
              }
            }
          }
        }
      }
    }
    .contentShow {
      width: 60%;
      @media (max-width: 767px) {
        width: 100%;
      }
    }
    .contentHide {
      width: 0;
    }
  }
}
</style>
<style>
</style>