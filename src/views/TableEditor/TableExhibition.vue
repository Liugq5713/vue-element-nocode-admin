<template>
  <div class="app-container">
    <el-card class="box-card" style="margin-bottom:20px">
      <TableExhibitionQuery />
    </el-card>
    <el-card class="box-card">
      <TableExhibitionBody :list="list" :headers="headers" />
    </el-card>
  </div>
</template>

<script>
import TableExhibitionBody from "./TableExhibitionBody";
import TableExhibitionQuery from "./TableExhibitionQuery";
export default {
  components: {
    TableExhibitionBody,
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
            return { key: item, label: item };
          });
        }
      },
      immediate: true
    }
  },
  data() {
    return {
      list: [],
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