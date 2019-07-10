<template>
  <el-container>
    <el-aside width="300px">
      <FormItemsDrag />
      <JsonForm />
    </el-aside>
    <el-main>
      <FormAttr style="margin-bottom:10px" />
      <el-card class="box-card">
        <el-row :gutter="20">
          <el-col :span="16">
            <FormItemsDrop />
          </el-col>
          <el-col :span="8">
            <FormItemAttr />
          </el-col>
        </el-row>
      </el-card>
    </el-main>
    <FormCode :form="formAttribute" :formItems="formItems" />
  </el-container>
</template>

<script>
import { mapGetters } from "vuex";
import FormAttr from "./components/FormAttr";
import FormItemAttr from "./components/FormItemAttr";
import FormItemsDrag from "./components/FormItemsDrag";
import FormItemsDrop from "./components/FormItemsDrop";
import JsonForm from "./components/JsonForm";
import FormCode from "./FormCode";

export default {
  components: {
    FormAttr,
    FormItemAttr,
    FormItemsDrag,
    FormItemsDrop,
    FormCode,
    JsonForm
  },

  computed: {
    ...mapGetters(["formAttribute", "formItems", "formItem", "formItemAttribute"])
  }
};
</script>
