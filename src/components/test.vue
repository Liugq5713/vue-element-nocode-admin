
<script>
export default {
  data() {
    return {
      temp: `
        <el-radio v-model="radio" label="1">
          备选项
        </el-radio>
        <el-radio v-model="radio" label="2">
          备选项
        </el-radio>
        `
    };
  },
  render(h) {
    return (
      <div>
        <div>{this.temp}</div>
        <div>{h("div", this.temp)}</div>;
      </div>
    );
  }
};
</script>