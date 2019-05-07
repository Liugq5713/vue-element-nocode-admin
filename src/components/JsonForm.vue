<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>JSON表单对象</span>
        <el-button size="mini" type="primary" style="float:right" @click="gen">生成表单</el-button>
      </div>
      <el-input type="textarea" :autosize="{ minRows: 5}" placeholder="请输入内容" v-model="formJson"></el-input>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formJson: undefined
    };
  }
};
</script>