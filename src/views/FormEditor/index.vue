<template>
  <el-container>
    <el-aside width="300px">
      <FormItemDrag />
      <JsonForm />
    </el-aside>
    <el-main>
      <FormAttr style="margin-bottom:10px" />
      <el-row :gutter="20">
        <el-col :span="20">
          <FormItemDrop />
        </el-col>
        <el-col :span="4">
          <FormItemDropAttr />
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

  computed: {
    ...mapGetters(["formAttribute", "formItems", "formItem", "FormItemDropAttribute"])
  }
};
</script>
