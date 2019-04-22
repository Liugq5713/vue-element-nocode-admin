<template>
  <el-card class="box-card">
    <div>
      <span>label</span>
      <el-input
        v-model.trim="formItemAttribute.label"
        placeholder="请输入"
        style="width:200px"
        @change="setFormItemAttribute()"
      ></el-input>
    </div>
    <div>
      <span>value</span>
      <el-input
        v-model.trim="formItemAttribute.value"
        placeholder="请输入"
        style="width:200px"
        @change="setFormItemAttribute"
      ></el-input>
    </div>
    <el-checkbox v-model="formItemAttribute.required" label="true" @change="setFormItemAttribute">必填</el-checkbox>
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
      console.log(" val", val);
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
        ...this.formItemAttribute
      });
    }
  }
};
</script>