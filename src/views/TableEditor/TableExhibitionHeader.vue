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
      <div v-for="header in tableHeaders" :key="header.key">
        <el-popover
          placement="right"
          trigger="focus">

          <el-tooltip class="item" effect="dark" :content="`该字段在表格中${header.show?'显示':'隐藏'}`" placement="top-start">
            <el-button v-if="header.show" type="info" icon="el-icon-close" size="small" circle @click='hide(header)'></el-button>
            <el-button  type="success" v-else icon="el-icon-check" @click="show(header)"  size="small" circle></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" :content="`该字段${header.opt===''? '未':''}置于template标签内`" placement="top-start">
            <el-button size="small" type="primary" v-if="header.opt===''" icon="el-icon-coordinate" @click="opt(header,'template')" circle></el-button>
            <el-button size="small" type="info" v-else icon="el-icon-coordinate" @click="opt(header,'')" circle></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" :content="`该字段${header.query?'是':'不是'}查询项`" placement="top-start">
            <el-button type="info" v-if="header.query"  size="small" icon="el-icon-magic-stick" @click="query(header,false)" circle></el-button>
            <el-button type="warning" v-else size="small"  icon="el-icon-search" @click="query(header,true)" circle></el-button>
          </el-tooltip>
          
          <div slot="reference" class="table-header-card">
            <el-tag type='success' v-if='header.show'>{{header.key}}</el-tag>
            <el-tag type='info' v-else>{{header.key}}</el-tag>
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
    },
    query(header,query){
      console.log('query', query)
      header.query=query
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
