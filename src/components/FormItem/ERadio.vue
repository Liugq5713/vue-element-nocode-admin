<template>
  <div>
    <el-radio v-model="inputVal" label="1">备选项</el-radio>
    <el-radio v-model="inputVal" label="2">备选项</el-radio>
  </div>
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