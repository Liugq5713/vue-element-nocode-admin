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
        <el-popover
          placement="right"
          trigger="focus">
          <el-tooltip class="item" effect="dark" content="控制显示/隐藏" placement="top-start">
            <el-button v-if="header.show" type="info" icon="el-icon-close" size="small" circle @click='hide(header)'></el-button>
            <el-button  type="success" v-else icon="el-icon-check" @click="show(header)"  size="small" circle></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="该字段置于template标签内" placement="top-start">
            <el-button size="small" type="primary" icon="el-icon-edit-outline" @click="opt(header,'template')" circle></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="该字段处理为时间" placement="top-start">
            <el-button type="primary" size="small" icon="el-icon-timer" @click="opt(header,'time')" circle></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="该字段设为查询项" placement="top-start">
            <el-button type="primary" size="small" icon="el-icon-search" @click="opt(header,'time')" circle></el-button>
          </el-tooltip>
          
          <div slot="reference" class="table-header-card">
            <el-tag type='success' v-if='header.show'>{{header.value}}</el-tag>
            <el-tag type='info' v-else>{{header.value}}</el-tag>
            <div>
              <el-input
                size="small"
                class="input-custom"
                v-model.trim="header.label"
                placeholder="请输入"
              ></el-input>
            </div>
          </div>
          </el-popover>
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
    set() {
      this.$emit("update:headers", this.tableHeaders);
    },
    show(header){
      header.show=true
    },
    hide(header){
      header.show=false
    },
    opt(header,opt){
      header.opt=opt
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
