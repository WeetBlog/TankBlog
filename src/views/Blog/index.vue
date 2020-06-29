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
      <el-table :data="tableData" style="width: 100%;" height="100%">
        <el-table-column prop="date" label="日期">
          <template>
            <el-button @click="drawer" type="text" size="small">查看</el-button>
            <el-drawer :visible.sync="drawer" :with-header="false">
              <span>我来啦!</span>
            </el-drawer>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
  name: "Blog",
  data() {
    return {
      isCollapse: true,
      drawer: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    changeIsCollapse() {
      this.isCollapse = !this.isCollapse;
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
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    /deep/.el-table,
    /deep/.el-table__expanded-cell {
      background-color: transparent;
    }
    /deep/.el-table th {
      color: #333;
    }
    /deep/.el-table th,
    /deep/.el-table tr {
      font-size: 16px;
      background-color: transparent;
    }
  }
}
</style>
<style>
</style>