<template>
  <div>
    <div slot="header" class="clearfix">
      <span>生成表格</span>
      <el-button size="mini" type="primary" style="float:right" @click="gen">生成表格</el-button>
    </div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 5}"
      placeholder="请输入内容, eg:{value:label}，记得给label加上引号"
      v-model="codeString"
      @change="prettierJSON"
    ></el-input>
  </div>
</template>

<script>
import { syntaxHighlight } from "@/utils";
import testData from "./test.json";
export default {
  data() {
    return {
      codeObject: "",
      codeString: JSON.stringify(testData, undefined, 2)
    };
  },
  created() {
    this.$emit("change", testData);
  },
  methods: {
    syntaxHighlight,
    gen() {},
    prettierJSON(val) {
      this.codeObject = JSON.parse(val);
      this.codeString = JSON.stringify(this.codeObject, undefined, 2);
      this.$emit("change", this.codeObject);
    }
  }
};
</script>