<template>
  <div class="navbar-container">
    <i
      @click="toggleSidebar"
      :class="[isSidebarCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold','iconStyle']"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    isSidebarCollapse: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
        this.$emit("change", val);
      }
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarCollapse = !this.isSidebarCollapse;
    }
  }
};
</script>

<style scoped>
.navbar-container {
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: solid 1px #e6e6e6;
}
.iconStyle {
  width: 50px;
  font-size: 24px;
}
</style>
