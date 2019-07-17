<template>
  <div class="app-container">
    <el-card class="box-card" style="margin-bottom:20px">
      <TableExhibitionQuery />
    </el-card>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="6">
          <TableExhibitionHeader :headers.sync="headers" />
        </el-col>
        <el-col :span="18">
          <TableExhibitionBody :list="list" :headers="headers" />
        </el-col>
      </el-row>
    </el-card>
    <pre style="background:#fff">
      {{code}}
    </pre>
  </div>
</template>

<script>
import TableExhibitionBody from "./TableExhibitionBody";
import TableExhibitionQuery from "./TableExhibitionQuery";
import TableExhibitionHeader from "./TableExhibitionHeader";
import {genTableSnippet} from './snippetTable.js'
export default {
  components: {
    TableExhibitionBody,
    TableExhibitionHeader,
    TableExhibitionQuery
  },
  props: {
    tableData: {
      type: Object,
      required: true
    }
  },
  watch: {
    tableData: {
      handler(val) {
        this.list = val.data && val.data.items.slice(0, 3);
        if (this.list) {
          this.headers = Object.keys(this.list[0]).map(item => {
            return { value: item, label: item };
          });
        }
      },
      immediate: true
    },
    headers:{
      handler(val){
        this.code= genTableSnippet(val)
      },
      deep:true
    }
  },
  data() {
    return {
      list: [],
      code:'',
      headers: [],
      query: {
        limit: 20,
        cursor: 1
      },
      total: 0
    };
  },
  created() {},
  methods: {
    editdata() {},
    test(val) {
      console.log("val", val);
    }
  }
};
</script>