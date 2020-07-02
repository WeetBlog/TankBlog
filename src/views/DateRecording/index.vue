<template>
  <el-row>
    <el-col
      style="height:100%;box-sizing: border-box; padding: 10px;"
      :xs="{span:22,offset:1}"
      :sm="{span:18,offset:3}"
      :md="{span:16,offset:4}"
    >
      <div class="block">
        <el-timeline>
          <el-timeline-item icon="el-icon-edit" size='large'  color="green" timestamp="2018-4-12" placement="top">
            <el-card>
              <h4 :class="textColor">发布了一篇新的博客</h4>
              <p>王小虎 提交于 2018/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item icon="el-icon-more" size='large' color="skyblue" timestamp="2018-4-3" placement="top">
            <el-card>
              <h4 :class="textColor">添加了新的Record</h4>
              <p>王小虎 提交于 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item icon="el-icon-edit-outline" color="orange"  size='large' timestamp="2018-4-2" placement="top">
            <el-card>
              <h4 :class="textColor">修改了一篇博客</h4>
              <p>王小虎 提交于 2018/4/2 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item icon="el-icon-document-delete" color="red"  size='large' timestamp="2018-4-2" placement="top">
            <el-card>
              <h4 :class="textColor">删除了一篇博客</h4>
              <p>王小虎 提交于 2018/4/2 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-col>
  </el-row>
</template>



<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
      return {
          textColor:"green"
      }
  },
};
</script>



<style lang="less" scoped>
h4{
    margin-bottom: 10px;
    font-size: 14px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 2px;
    &::before{
        content: " --- ";
    }
    &::after{
        content: " --- ";
    }
}
p{
    padding-left: 10px;
    box-sizing: border-box;
    font-size: 14px;
    color: #777;
}
.green{
    color:green;
}
.red{
    color:red;
}
.orange{
    color: orange;
}
.skyblue{
    color:skyblue
}
</style>