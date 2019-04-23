<template>
  <el-card class="box-card">
    <el-button size="mini" type="primary" @click="copy">复制</el-button>
    <code class="code">
      <pre ref="srcCode">
    {{srcCode}}
    </pre>
    </code>
  </el-card>
</template>

<script>
/* eslint-disable no-useless-escape */
import { genSelectFormItem } from "./code.js";
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
      fromItemsCode: ""
    };
  },
  watch: {
    form(val) {
      console.log("code val", val);
      this.genFormCode();
    },
    formItems(val) {
      this.fromItemsCode = val
        .map(item => {
          return genSelectFormItem(
            this.formObj,
            item.props.label,
            item.props.value
          );
        })
        .join("\n");
      console.log("this.fromItems ", this.fromItems);
      this.genFormCode();
    }
  },

  computed: {
    ref() {
      return this.form.ref;
    },
    formObj() {
      return this.form.formObj;
    }
  },
  created() {
    this.genFormCode();
  },
  methods: {
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
    },
    genSelectFormItem,
    genFormCode() {
      this.srcCode = this.genFormWrapper(
        this.ref,
        this.formObj,
        this.fromItemsCode
      );
    },
    genFormWrapper(ref, formObj, fromItemsCode) {
      return `
<el-form ref="${ref}" :model="${formObj}" label-width="80px">
        ${fromItemsCode}
</el-form>`;
    },
    genFormValidateCode() {},
    genFormCommonCode() {
      const str = `
<el-form ref="${this.ref}" :model="${this.formObj}" label-width="80px">

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
    }
  }
};
</script>

<style scoped>
.code {
  background-color: #f8f8f8;
}
</style>