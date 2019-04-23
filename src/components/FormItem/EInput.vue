
<template>
  <el-input v-model="inputVal" v-bind="$attrs" placeholder="请输入内容"></el-input>
</template>

<script>
export default {
  porps: {
    value: ""
  },
  data() {
    return {};
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("change", val);
        this.$emit("input", val);
      }
    }
  }
};
</script>