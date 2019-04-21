<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item v-for="(form,idx) in forms" :key="form.title" :title="form.title" :name="idx">
      <div v-for="(spec,idx) in form.specs" :key="idx">
        <div>
          <div v-html="spec.code"></div>
          <el-radio v-model="radio" label="1">备选项</el-radio>
        </div>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  data() {
    return {
      forms: {
        radio: {
          title: "Radio 单选框",
          specs: [
            {
              title: "基础用法",
              tempage: `
                <el-radio v-model="radio" label="1">备选项</el-radio>
                <el-radio v-model="radio" label="2">备选项</el-radio>`,
              code: Vue.compile(this.tempage)
            },
            {
              title: "Radio 单选框组",
              code: `
                <el-radio-group v-model="radio">
                    <el-radio :label="3">备选项</el-radio>
                    <el-radio :label="6">备选项</el-radio>
                    <el-radio :label="9">备选项</el-radio>
                 </el-radio-group>`
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
  }
};
</script>