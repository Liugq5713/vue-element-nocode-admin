<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="5">
        <el-card class="box-card">
          <TableEditor @change="setTableData" />
        </el-card>
      </el-col>
      <el-col :span="19">
        <TableExhibition :tableData="tableData" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TableEditor from "./TableEditor";
import TableExhibition from "./TableExhibition";
export default {
  components: {
    TableEditor,
    TableExhibition
  },
  data() {
    return {
      tableData: {}
    };
  },
  methods: {
    setTableData(val) {
      this.tableData = val;
    }
  }
};
</script>