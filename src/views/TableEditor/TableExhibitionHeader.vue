<template>
  <div class="table-header">
    <h3>表头编辑区</h3>
    <draggable
      v-model="tableHeaders"
      group="people"
      @change="set"
      @start="drag=true"
      @end="drag=false"
    >
      <div v-for="header in tableHeaders" :key="header.value">
        <div class="table-header-card">
          <div>{{header.value}}</div>
          <div>
            <el-input
              size="small"
              class="input-custom"
              v-model.trim="header.label"
              placeholder="请输入"
            ></el-input>
          </div>
        </div>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  props: {
    headers: {
      type: Array,
      required: true
    }
  },
  watch: {
    headers(val) {
      this.tableHeaders = val;
    }
  },
  data() {
    return {
      tableHeaders: this.headers
    };
  },
  methods: {
    set(val) {
      this.$emit("update:headers", this.tableHeaders);
      console.log("val", val);
    }
  }
};
</script>

<style scoped>
.table-header-card {
  margin: 10px 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04); */
}
.table-header >>> .el-input__inner {
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #9e9e9e;
}
</style>
