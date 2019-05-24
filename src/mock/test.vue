<template>
  <el-form :model="defaultFormObj" ref="defaultRef" :rules="rules" label-width="80px">
    <el-form-item>
      <el-button size="mini" type="primary" @click="defaultMethod('defaultRef')">创建</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
        data() {      return {        defaultFormObj:{                },        rules:{                }      }    },    methods: {      defaultMethod(formName) {        this.$refs[formName].validate(async (valid) => {          if (valid) {            await defaultMethod(this.defaultFormObj)            this.$message.success('创建成功')          } else {            console.log('error submit!!');            return false;          }        });    }    }  }</script>