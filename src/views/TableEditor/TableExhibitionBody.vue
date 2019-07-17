<template>
  <div class="app-container">
    <el-table :data="list" border style="width: 100%" @header-click="test">
      <el-table-column prop label align="center"></el-table-column>
      <el-table-column
        v-for="header in headers"
        :key="header.key"
        :label="header.label"
        align="center"
      >
        <template slot-scope="{row}">{{row[header.key]}}</template>
      </el-table-column>
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
    list: {
      type: Array,
      required: true
    },
    headers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
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