
<template>
  <el-input v-model.number="inputVal" placeholder="数字" v-bind="$attrs" type="number"></el-input>
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