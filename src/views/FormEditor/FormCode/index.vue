<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-button size="mini" type="primary" @click="copy">{{$t('code.copy')}}</el-button>
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
import {_rules, _ref,_genFormItems,_upsertBtn,_genData,_genRules,_genSubmitMethod } from './vueSnippet.js'
export default {
  props: {
    form: {
      type: Object
    },
    formItems: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      srcCode: "",
      fromItemsCode: "",
      refCode: "",
      formObj: "",
      dataFormData: {},
      dataFormRules: {},
      submitMethods: "",
      validated: false
    };
  },
  watch: {
    form: {
      handler(val) {
        this.genVueFile(val, this.formItems);
      },
      deep: true
    },
    formItems: {
      handler(val) {
        this.genVueFile(this.form, val);
      },
      deep: true
    }
  },
  created() {
    this.genVueFile(this.form, this.formItems);
  },
  methods: {
    genVueFile(form, formItems) {
      const data = {
        ref: form.ref,
        formObj: form.formObj,
        method: form.method,
        validated: form.validated,
        confirmed: form.confirmed,
        formItems: formItems
      };
      this.srcCode = this.genVueFileWrapper(data);
      window.localStorage.removeItem("vue-element-form-gen-code");
      window.localStorage.setItem("vue-element-form-gen-code", this.srcCode);
    },
    genVueFileWrapper({
      formObj,
      validated,
      ref,
      method,
      confirmed,
      formItems
    } = {}) {
      return `
<template>
<el-form :model="${formObj}" ${_ref(validated,ref)}  ${_rules(validated)} label-width="80px">
  ${_genFormItems(formObj, validated, formItems)}
  ${_upsertBtn(validated,ref,method)}
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        ${_genData(formObj, formItems)},
        ${_genRules(validated,formItems)}
      }
    },
    methods: {
      ${_genSubmitMethod(validated,confirmed,formObj,method)}
    }
  }
<\/script>
`;
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
    },
    skipToEdit() {
      window.open(`./code-editor`, "_blank");
    }
  }
};
</script>

<style scoped>
.code {
  background-color: #f8f8f8;
}
</style>