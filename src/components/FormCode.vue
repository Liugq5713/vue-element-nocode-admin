<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-button size="mini" type="primary" @click="copy">复制代码</el-button>
    </div>
    <code class="code">
      <div style="overflow:auto">
        <pre ref="srcCode">
    {{srcCode}}
    </pre>
      </div>
    </code>
  </el-card>
</template>

<script>
/* eslint-disable no-useless-escape */
import genFormItemCode from "./code.js";
export default {
  props: {
    form: {
      type: Object
    },
    formItems: {
      type: Array
    }
  },
  data() {
    return {
      srcCode: "",
      fromItemsCode: "",
      refCode: "",
      formObj: ""
    };
  },
  watch: {
    form: {
      handler(val) {
        this.refCode = val.ref;
        this.formObj = val.formObj;
        this.fromItemsCode = this.formItems
          .map(item => {
            const func = genFormItemCode(item.type);
            return func(this.formObj, item.props.label, item.props.value);
          })
          .join("\n");
        this.genFormCode();
      },
      deep: true
    },
    formItems: {
      handler(val) {
        this.fromItemsCode = val
          .map(item => {
            const func = genFormItemCode(item.type);
            return func(this.formObj, item.props.label, item.props.value);
          })
          .join("\n");
        this.genFormCode();
      },
      deep: true
    }
  },
  created() {
    this.genFormCode();
  },
  methods: {
    genFormItemCode,
    genFormCode() {
      this.srcCode = this.genFormWrapper(
        this.refCode,
        this.formObj,
        this.fromItemsCode
      );
    },
    genFormWrapper(ref, formObj, fromItemsCode) {
      return `
<template>
<el-form :model="${formObj}" label-width="80px">
  ${fromItemsCode}
</el-form>
</template>
`;
    },
    genFormValidateCode() {},
    genFormCommonCode() {
      const str = `
<el-form :model="${this.formObj}" label-width="80px">

</el-form>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
<\/script>`;
      this.code = str;
    },
    copy() {
      const clipboardDiv = this.$refs["srcCode"];
      clipboardDiv.focus();
      window.getSelection().removeAllRanges();
      var range = document.createRange();
      range.setStartBefore(clipboardDiv.firstChild);
      range.setEndAfter(clipboardDiv.lastChild);
      window.getSelection().addRange(range);
      try {
        if (document.execCommand("copy")) {
          this.$message.success("已复制到剪贴板");
        } else {
          this.$message.error("未能复制到剪贴板，请全选后右键复制");
        }
      } catch (err) {
        this.$message.error("未能复制到剪贴板，请全选后右键复制");
      }
    }
  }
};
</script>

<style scoped>
.code {
  background-color: #f8f8f8;
}
</style>