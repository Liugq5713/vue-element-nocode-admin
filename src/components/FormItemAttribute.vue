<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>表单元素属性编辑</span>
    </div>
    <el-form :model="formItemAttribute" label-width="70px">
      <el-form-item label="label" style="width: 90%">
        <el-input
          v-model.trim="formItemAttribute.label"
          placeholder="请输入label"
          @change="setFormItemAttribute()"
        ></el-input>
      </el-form-item>
      <el-form-item label="value" style="width: 90%">
        <el-input
          v-model.trim="formItemAttribute.value"
          placeholder="请输入value"
          @change="setFormItemAttribute()"
        ></el-input>
      </el-form-item>
      <el-form-item label="数据格式" style="width: 90%">
        <el-checkbox
          v-model="formItemAttribute.required"
          label="true"
          @change="setFormItemAttribute"
        >必填</el-checkbox>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  props: {
    formItem: {
      type: Object
    }
  },
  data() {
    return {
      activeNames: ["1"],
      formItemIndex: 0,
      formItemAttribute: {},
      formItemOpt: ""
    };
  },
  watch: {
    formItem(val) {
      if (val.added) {
        this.formItemOpt = "add";
        this.formItemIndex = val.added.newIndex;
        this.formItemAttribute = { ...val.added.element.props };
      } else {
        this.formItemOpt = "others";
        this.formItemIndex = 0;
        this.formItemAttribute = {};
      }
      if (val.type === "click") {
        this.formItemOpt = "click";
        this.formItemIndex = val.idx;
      }
    }
  },
  methods: {
    setFormItemAttribute() {
      this.$emit("change", this.formItemOpt, this.formItemIndex, {
        ...this.formItemAttribute,
      });
    }
  }
};
</script>