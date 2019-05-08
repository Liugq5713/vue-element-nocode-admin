<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>表单元素属性编辑</span>
    </div>
    <el-form :model="formItemAttribute">
      <el-form-item>
        <el-select v-model="formItemType" placeholder="请选择表单元素类型" @change="setFormItemAttribute">
          <el-option
            v-for="item in input_type_opts"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-input
          v-model.trim="formItemAttribute.label"
          placeholder="请输入label"
          @change="setFormItemAttribute"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model.trim="formItemAttribute.value"
          placeholder="请输入value"
          @change="setFormItemAttribute"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox
          v-model="formItemAttribute.required"
          label="true"
          @change="setFormItemAttribute"
        >是否必填</el-checkbox>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { input_type_opts } from "./opt.js";
export default {
  props: {
    formItem: {
      type: Object
    }
  },
  data() {
    return {
      input_type_opts,
      activeNames: ["1"],
      formItemIndex: 0,
      formItemType: "",
      formItemAttribute: {},
      formItemOpt: ""
    };
  },
  watch: {
    formItem(val) {
      if (val.added) {
        this.formItemOpt = "add";
        this.formItemIndex = val.added.newIndex;
        this.formItemType = val.added.element.type;
        this.formItemAttribute = { ...val.added.element.props };
      } else {
        this.formItemOpt = "others";
        this.formItemIndex = 0;
        this.formItemAttribute = {};
      }
      if (val.type === "click") {
        this.formItemOpt = "click";
        this.formItemIndex = val.idx;
        this.formItemType = val.element.type;
        this.formItemAttribute = { ...val.element.props };
      }
    }
  },
  methods: {
    setFormItemAttribute() {
      this.$emit(
        "change",
        this.formItemOpt,
        this.formItemIndex,
        this.formItemType,
        {
          ...this.formItemAttribute
        }
      );
    }
  }
};
</script>