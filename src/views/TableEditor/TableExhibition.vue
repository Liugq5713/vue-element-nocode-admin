<template>
  <div class="app-container">
    <el-table :data="list" border style="width: 100%">
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="editdata(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Object,
      required: true
    }
  },
  watch: {
    tableData: {
      handler(val) {
        this.list = val.data && val.data.items;
      },
      immediate: true
    }
  },
  data() {
    return {
      list: undefined,
      query: {
        limit: 20,
        cursor: 1
      },
      total: 0
    };
  },
  created() {},
  methods: {
    editdata() {}
  }
};
</script>