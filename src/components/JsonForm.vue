<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>JSON表单对象</span>
        <el-button size="mini" type="primary" style="float:right" @click="gen">生成表单</el-button>
      </div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 5}"
        placeholder="请输入内容,用了eval，请不要自嗨"
        v-model="formJson"
      ></el-input>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formJson: undefined
    };
  },
  methods: {
    gen() {
      try {
        const formData = eval(`(${this.formJson})`);
        const formItems = Object.keys(formData).map((item, idx) => {
          return {
            type: "EInput",
            title: "JSON生成",
            props: {
              label: `${formData[item] || item}`,
              value: item,
              required: ""
            }
          };
        });
        console.log("formItems", formItems);
        this.$emit("change", formItems);
      } catch (error) {
        this.$message.error("请填入正确的Object");
      }
    }
  }
};
</script>