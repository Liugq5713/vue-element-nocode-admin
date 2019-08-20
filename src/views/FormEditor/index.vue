<template>
  <el-container>
    <el-aside width="300px">
      <FormItemDrag />
      <JsonForm />
    </el-aside>
    <el-main>

      <el-row :gutter="20">
        <el-col :span="14">
          <FormItemDrop />
        </el-col>
        <el-col :span="10">
          <el-card class='box-card'>
            <el-tabs v-model="activeName" type="card">
              <el-tab-pane label="表单项属性" name="item">
             <FormItemDropAttr />
            </el-tab-pane>
            <el-tab-pane label="表单属性" name="form">
              <FormAttr style="margin-bottom:10px" />
            </el-tab-pane>
          </el-tabs>
          </el-card>
        </el-col>
      </el-row>

    </el-main>
    <FormCode :form="formAttribute" :formItems="formItems" />
  </el-container>
</template>

<script>
import { mapGetters } from "vuex";
import FormAttr from "./components/FormAttr";
import FormItemDropAttr from "./components/FormItemDropAttr";
import FormItemDrag from "./components/FormItemDrag";
import FormItemDrop from "./components/FormItemDrop";
import JsonForm from "./components/JsonForm";
import FormCode from "./FormCode";

export default {
  components: {
    FormAttr,
    FormCode,
    JsonForm,
    FormItemDrag,
    FormItemDrop,
    FormItemDropAttr
  },
data(){
  return {
    activeName:"item"
  }
},
  computed: {
    ...mapGetters(["formAttribute", "formItems", "formItem"])
  }
};
</script>
