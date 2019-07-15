<template>
  <div class="navbar-container">
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1" style="padding:0 !important">
        <i
          @click="toggleSidebar"
          :class="[isSidebarCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold','iconStyle']"
        ></i>
      </el-menu-item>
    </el-menu>
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

.navbar-container >>> .el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none !important;
}
</style>
