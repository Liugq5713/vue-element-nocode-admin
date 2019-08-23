<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="5">
        <el-card class="box-card">
          <TableEditor
            :get-table-a-p-i.sync="getTableAPI"
            @change="setTableData"
          />
        </el-card>
      </el-col>
      <el-col :span="19">
        <TableExhibition
          :get-table-a-p-i="getTableAPI"
          :table-data="tableData"
        />
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
      tableData: {},
      getTableAPI:'',
    };
  },
  methods: {
    setTableData(val) {
      this.tableData = val;
    }
  }
};
</script>
