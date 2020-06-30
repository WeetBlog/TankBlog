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
        <div class="content">
          <div class="userMessage">
            <div class="image">
              <img src="./image/blog.webp" alt />
              <span>博主：</span>
              <span class="blogName">Tank</span>
            </div>

            <div class="tag">
              <el-tag type="success" size="mini">个人</el-tag>
              <el-tag size="mini">生后记录</el-tag>
            </div>
            <p class="message"></p>
          </div>
          <el-divider>
            <i class="el-icon-time"></i> 2020-06-30
          </el-divider>
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
    this.$bus.$emit('changeIndex','2')
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
    }
  }
};
</script>



<style lang="less" scoped>
.blog {
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
        @media (max-width:767px) {
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
      @media (max-width: 767px) {
        top: 0px;
        position : absolute;
      }
      top: 60px;
      right: 0;
      height: 100%;
      background-color: #eeeeee;
      transition: 0.3s all;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      .title {
        position: relative;
        background-color: #fff;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        font-weight: bold;
        letter-spacing: 2px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 22px;
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
      .content {
        margin: 10px;
        padding: 10px;
        background-color: #fff;
        border-radius: 3px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        .image {
          color: #888;
          padding-right: 100px;
          text-overflow: ellipsis;
          overflow: hidden;
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            margin-right: 20px;
          }
          .blogName{
            color: skyblue;
            font-size: 16px;
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