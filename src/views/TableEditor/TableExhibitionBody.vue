<template>
  <div class="app-container">
    <h3>表格展示区</h3>
    <el-table :key="table_key" :data="list" border style="width: 100%" @header-click="test">
      <el-table-column
        v-for="header in headers"
        :key="header.value"
        :label="header.label"
        align="center"
      >
        <template slot-scope="{row}">{{row[header.value]}}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: null,
      required: true
    },
    headers: {
      type: Array,
      required: true
    }
  },
  watch: {
    headers() {
      this.table_key++;
    }
  },
  data() {
    return {
      query: {
        limit: 20,
        cursor: 1
      },
      table_key: 0,
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