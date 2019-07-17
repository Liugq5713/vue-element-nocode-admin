<template>
  <div class="app-container">
    <el-table :data="list" border style="width: 100%" @header-click="test">
      <el-table-column
        v-for="header in headers"
        :key="header.key"
        :label="header.label"
        align="center"
      >
        <template slot-scope="{row}">{{row[header.key]}}</template>
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
  watch: {
    headers(val) {
      console.log("val", val);
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