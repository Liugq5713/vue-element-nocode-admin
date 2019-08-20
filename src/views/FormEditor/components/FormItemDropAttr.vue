<template>
  <el-form
    :model="formItemAttribute"
    label-width="80px"
  >
    <el-form-item label="表单元素">
      <el-select
        v-model="formItemElement.type"
        placeholder="请选择表单元素类型"
        @change="setFormItemAttribute"
      >
        <el-option
          v-for="item in input_type_opts"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="label">
      <el-input
        v-model.trim="formItemAttribute.label"
        placeholder="请输入label"
        @change="setFormItemAttribute"
      />
    </el-form-item>
    <el-form-item label="value">
      <el-input
        v-model.trim="formItemAttribute.value"
        placeholder="请输入value"
        @change="setFormItemAttribute"
      />
    </el-form-item>
    <el-form-item label="数据验证">
      <el-checkbox
        v-model="formItemAttribute.required"
        label="true"
        @change="setFormItemAttribute"
      >
        是否必填
      </el-checkbox>
      <el-select
        v-model="formItemAttribute.type"
        style="width:150px"
        clearable
        placeholder="数据类型"
        size="small"
        @change="setFormItemAttribute"
      >
        <el-option
          v-for="item in value_type_opts"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapGetters } from "vuex";

import { input_type_opts, value_type_opts } from "./opt.js";
export default {
  data() {
    return {
      input_type_opts,
      value_type_opts,
      idx: 0,
      opt: "",
      formItemAttribute: {},
      formItemElement: {}
    };
  },
  computed: {
    ...mapGetters(["formItemToHandle"])
  },
  watch: {
    formItemToHandle(val) {
      if (val.added) {
        this.opt = "add";
        this.idx = val.added.newIndex;
        this.formItemElement = val.added.element;
        this.formItemAttribute = { ...val.added.element.props };
      } else {
        this.opt = "others";
        this.idx = 0;
        this.formItemAttribute = {};
      }
      if (val.type === "click") {
        this.opt = "click";
        this.idx = val.idx;
        this.formItemElement = val.element;
        this.formItemAttribute = { ...val.element.props };
      }
    }
  },
  methods: {
    setFormItemAttribute() {
      if (this.opt === "add" || this.opt === "click") {
        this.$store.commit("UPDATE_FORMITEM_OF_ITEMS", {
          idx: this.idx,
          formItem: {
            ...this.formItemElement,
            props: {
              ...this.formItemAttribute
            }
          }
        });
      }
    }
  }
};
</script>
