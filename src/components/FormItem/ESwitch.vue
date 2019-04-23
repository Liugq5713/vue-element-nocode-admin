

<template>
  <el-switch v-model="inputVal" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
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