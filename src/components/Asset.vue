<script>
import Radio from "./FormItem/Radio";
export default {
  components: {
    Radio
  },
  data() {
    return {
      forms: {
        radio: {
          title: "Radio 单选框",
          specs: [
            {
              title: "基础用法",
              props: {}
            },
            {
              title: "Radio 单选框组",
              code: `
                    <el-radio :label="3">备选项</el-radio>
                    <el-radio :label="6">备选项</el-radio>
                    <el-radio :label="9">备选项</el-radio>
                 `
            }
          ]
        },
        checkbox: {
          title: "Checkbox 多选框",
          specs: [{ title: "Input 输入框" }]
        },
        input: {
          title: "Input 输入框",
          specs: [{ title: "Input 输入框" }]
        },
        select: {
          title: "Select 选择器",
          specs: [{ title: "Input 输入框" }]
        },
        switch: {
          title: "Switch 开关",
          specs: [{ title: "Input 输入框" }]
        }
      },
      activeNames: ["1"]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  },
  render() {
    const elCollapseItems = Object.keys(this.forms).map((type, idx) => {
      return (
        <el-collapse-item
          title={this.forms[type].title}
          name={this.forms[type].idx}
        >
          <div>
            <div v-html="spec.code" />
            <Radio />
          </div>
        </el-collapse-item>
      );
    });
    return <el-collapse>{elCollapseItems}</el-collapse>;
  }
};
</script>