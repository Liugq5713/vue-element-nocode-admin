<template>
  <el-container>
    <el-aside width="300px">
      <FormItemAsset/>
      <JsonForm :store="store"/>
    </el-aside>
    <el-main>
      <FormAttribute :store="store" style="margin-bottom:10px"/>
      <el-card class="box-card">
        <el-row :gutter="20">
          <el-col :span="16">
            <FormItems :store="store" :formItems="formItems"></FormItems>
          </el-col>
          <el-col :span="8">
            <FormItemAttribute :store="store" :formItemToHandle="formItemToHandle"/>
          </el-col>
        </el-row>
      </el-card>
    </el-main>
    <el-aside width="300px">
      <FormCode :form="form" :formItems="formItems"/>
    </el-aside>
  </el-container>
</template>

<script>
import FormAttribute from "./FormAttribute";
import FormItems from "./FormItems";
import FormItemAttribute from "./FormItemAttribute";
import FormItemAsset from "./FormItemAsset";
import FormCode from "./FormCode";
import JsonForm from "./JsonForm";
import FormStore from "./FormStore.js";

export default {
  components: {
    FormItems,
    FormItemAsset,
    FormAttribute,
    FormItemAttribute,
    FormCode,
    JsonForm
  },
  data() {
    const store = new FormStore(this);
    return {
      store
    };
  },
  computed: {
    form() {
      return this.store.states.formAttribute;
    },
    formItems() {
      return this.store.states.formItems;
    },
    formItem() {
      return this.store.states.formItem;
    },
    formItemToHandle() {
      return this.store.states.formItemToHandle;
    },
    formItemAttribute() {
      return this.store.states.formItemAttribute;
    }
  }
};
</script>
