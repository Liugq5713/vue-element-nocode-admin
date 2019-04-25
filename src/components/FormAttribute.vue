<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>表单属性</span>
    </div>
    <div>
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="表单对象">
          <el-input v-model.trim="form.formObj"  style="width:150px;" placeholder="表单对象"></el-input>
        </el-form-item>
        <el-form-item label="更新方法">
          <el-input v-model.trim="form.method" style="width:150px" placeholder="更新方法"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox style="width:150px" v-model="form.validated" label="true">需要验证</el-checkbox>
        </el-form-item>
        <el-form-item label="表单Ref">
          <el-input v-model.trim="form.ref"  style="width:150px;" placeholder="表单的Ref值"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox style="width:150px;margin:0 1px" v-model="form.confirmed" label="true">双重确认</el-checkbox>
        </el-form-item>
      </el-form>
     
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      form: {
        formObj: "defaultFormObj",
        ref: "defaultRef",
        validated: true,
        confirmed:false,
        method:'defaultMethod'
      }
    };
  },
  watch: {
    form: {
      handler: function(val) {
        this.$emit("change", {...val,ref:val.validated&&val.ref});
      },
      deep: true,
      immediate:true
    }
  },
  method:{
    test(){
      this.$confirm('此操作将永久删除此项, 是否继续?', '提示',
         {
           confirmButtonText: '确定',
           cancelButtonText: '取消',
           type: 'warning'
           }).then(() => {
             this.$message({
               type: 'success',
               message: '删除成功!'
             });
           }).catch(() => {
             this.$message({
               type: 'info',
               message: '已取消删除'
             });
             });
    }
  }
};
</script>

<style>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.formItemMargin{
  margin-right:10px
}
</style>
