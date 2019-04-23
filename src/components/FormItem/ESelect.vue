<template>
  <el-select v-model="inputVal" placeholder="请选择">
    <el-option label="选项一" value="first"></el-option>
    <el-option label="选项二" value="second"></el-option>
  </el-select>
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