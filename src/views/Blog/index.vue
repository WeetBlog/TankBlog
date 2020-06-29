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
      <el-table v-if="screenWidth > 767" :data="tableData" style="width: 100%;" height="100%" @row-click="clickRow">
        <el-table-column prop="title" label="Title" width="300" class="titleTab">
          <template slot-scope="scope">
            <div class="titleTab">
            <i class="iconfont icon-wenzhang"></i>
            <span style="margin-left: 10px">{{ scope.row.title }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="overview" label="Overview"></el-table-column>
        <el-table-column prop="date" label="Date" width="150"></el-table-column>
      </el-table>
      <el-table v-else :data="tableData" style="width: 100%;" height="100%" @row-click="clickRow">
        <el-table-column prop="title" label="Title"  class="titleTab">
          <template slot-scope="scope">
            <div class="titleTab">
            <i class="iconfont icon-wenzhang"></i>
            <span style="margin-left: 10px">{{ scope.row.title }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="Date" width="100" ></el-table-column>
      </el-table>
      <div class="contentWarp" :class="contentWidth" ref="contentWarp"></div>
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
      contentWidth:'contentHide',
      tableData: [
        {
          title: "王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎",
          overview: "上海市普陀区金沙江路 1518 弄",
          date: "2016-05-02"
        }
      ]
    };
  },
  methods: {
    changeIsCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    clickRow(row) {
      console.log(row);
      this.contentWidth = 'contentShow'
      // console.log(column)
      // console.log(event)
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
      }
      .shouBtn {
        width: 201px;
        transition: 0.3s all ease-in;
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
    .titleTab{
      i{
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
    .contentWarp{
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      background-color: #bfa;
      transition: 0.3s all;
    }
    .contentShow{
        width: 60%;
    }
    .contentHide{
       width: 0;
    }
  }
}
</style>
<style>
</style>