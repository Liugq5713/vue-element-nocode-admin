<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{$t('form.JSON')}}</span>
        <el-button size="mini" type="primary" style="float:right" @click="gen">生成表单</el-button>
      </div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 5}"
        placeholder="请输入内容, eg:{value:label}，记得给label加上引号"
        v-model="formJson"
      ></el-input>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    store: Object
  },
  data() {
    return {
      formJson: undefined
    };
  },
  methods: {
    gen() {
      try {
        const formData = eval(`(${this.formJson})`);
        const formItems = Object.keys(formData).map(item => {
          return {
            type: "EInputTrim",
            title: "JSON生成",
            props: {
              label: `${formData[item] || item}`,
              value: item,
              required: ""
            }
          };
        });
        this.store.commit("setFormItems", formItems);
      } catch (error) {
        this.$message.error("请填入正确的Object");
      }
    }
  }
};
</script>