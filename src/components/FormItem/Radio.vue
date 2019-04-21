
<script>
export default {
  data() {
    return {
      temp: `
       
        `
    };
  },
  render(h) {
    return (
      <div>
        <el-radio v-model="radio" label="1">
          备选项
        </el-radio>
        <el-radio v-model="radio" label="2">
          备选项
        </el-radio>
      </div>
    );
  }
};
</script>