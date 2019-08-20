<template>
  <el-container>
    <el-aside width="300px">
      <FormItemAsset />
      <JsonForm />
    </el-aside>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="14">
          <FormItems />
        </el-col>
        <el-col :span="10">
          <el-card class="box-card">
            <el-tabs v-model="activeName">
              <el-tab-pane
                label="表单项属性"
                name="item"
              >
                <FormItemAttr />
              </el-tab-pane>
              <el-tab-pane
                label="表单属性"
                name="form"
              >
                <FormAttr style="margin-bottom:10px" />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
    <FormCode
      :form="formAttribute"
      :form-items="formItems"
    />
  </el-container>
</template>

<script>
import { mapGetters } from "vuex";
import FormAttr from "./components/FormAttr";
import FormItemAttr from "./components/FormItemAttr";
import FormItemAsset from "./components/FormItemAsset";
import FormItems from "./components/FormItems";
import JsonForm from "./components/JsonForm";
import FormCode from "./FormCode";

export default {
  components: {
    FormAttr,
    FormCode,
    JsonForm,
    FormItemAsset,
    FormItems,
    FormItemAttr
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
