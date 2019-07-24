<template>
  <div>
    <div slot="header" class="clearfix" style="margin-bottom:15px;">
      <el-input size="mini" v-model.trim='getTableAPI' placeholder='获取数据的函数' style='width:200px'></el-input>
      <el-button size="mini" type="primary" style="float:right" @click="prettierJSON(this.codeString)">生成表格</el-button>
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
  props:{
    getTableAPI:{
      type:String
    }
  },
  data() {
    return {
      codeObject: "",
      codeString: JSON.stringify(testData, undefined, 2)
    };
  },
  computed:{
    getTableDataAPI:{
      get(){
        return this.getTableAPI
      },
      set(val){
        this.$emit('update:getTableAPI',val)
      }
    }
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