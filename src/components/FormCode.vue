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
      formObj: "",
      dataFormData:{},
      dataFormRules:{},
      submitMethods:'',
      is_validated:false
    };
  },
  watch: {
    form: {
      handler(val) {
    this.genVueFile(val,this.formItems);
},
      deep: true
    },
    formItems: {
      handler(val) {
    this.genVueFile(this.form,val);
      },
      deep: true
    }
  },
  created() {
    this.genVueFile(this.form,this.formItems);
  },
  methods: {
    genFormItemCode,
    genVueFile(form,formItems) {
          console.log('form', form)
          const data = {
            ref:form.ref,
            formObj:form.formObj,
            is_validated:form.is_validated,
            formItems:formItems
          }
      this.srcCode = this.genVueFileWrapper(data);
    },
    genVueFileWrapper({formObj,is_validated,formItems}={}) {
      return `
<template>
<el-form :model="${formObj}"  label-width="80px">
  ${this.genFormItemsCode(formObj,formItems)}
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        ${this.genScriptDataFormData(formObj,formItems)},
        ${is_validated?this.genScriptDataRules(formObj,formItems):''}
      }
    },
    methods: {

    }
  }
<\/script>
`;
    },
    genFormValidateCode() {},
    genFormItemsCode(formObj,formItems){
  return formItems
          .map(item => {
            const func = genFormItemCode(item.type);
            return func(this.formObj, item.props.label, item.props.value);
          })
          .join("\n");
    },
    genScriptDataFormData(formObj,formItems){
      const formdata= formItems
          .map(item => {
            return `${item.props.value}:''`
          }).join(',\n          ')
  return `${formObj}:{
          ${formdata}
        }`
    },
    genScriptDataRules(formObj,formItems){
      const formdata= formItems
          .map(item => {
            if(item.props.required){
              return `${item.props.value}: [
                { required: true, message: '${item.props.label}必填', trigger: 'change' }
          ],`
            }
          }).join(',\n          ')
  return `rules:{
          ${formdata}
        }`
    },
    genScriptMethodSubmit(){

    },
    genFormValidate(){

    },
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