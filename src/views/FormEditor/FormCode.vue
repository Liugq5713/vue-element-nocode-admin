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
    genFormItemCode,
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
<el-form :model="${formObj}" ${this.genFormRef(validated, ref)}  ${
        validated ? `:rules='rules'` : ""
      } label-width="80px">
  ${this.genFormItemsCode(formObj, validated, formItems)}
  ${this.genFormItemUpsertButton(validated, ref, method)}
  
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        ${this.genScriptDataFormData(formObj, formItems)},
        ${validated ? this.genScriptDataRules(formObj, formItems) : ""}
      }
    },
    methods: {
      ${this.genScriptMethodSubmit(validated, confirmed, formObj, method)}
    }
  }
<\/script>
`;
    },
    genFormItemsCode(formObj, validated, formItems) {
      return formItems
        .map(item => {
          const func = genFormItemCode(item.type);
          return func(formObj, validated, item.props.label, item.props.value);
        })
        .join("\n");
    },
    genScriptDataFormData(formObj, formItems) {
      const formdata = formItems
        .map(item => {
          return `${item.props.value}:''`;
        })
        .join(",\n          ");
      return `${formObj}:{
          ${formdata}
        }`;
    },
    genScriptDataRules(formObj, formItems) {
      const formdata = formItems
        .filter(item => {
          return item.props.required;
        })
        .map(item => {
          return `${item.props.value}: [
                { required: true, message: '${
                  item.props.label
                }必填', trigger: 'blur' }
          ]`;
        })
        .join(",\n          ");
      return `rules:{
          ${formdata}
        }`;
    },
    genScriptMethodSubmit(validated, confirmed, formObj, method) {
      if (confirmed && validated) {
        return `${method}(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
               this.$confirm('此操作将永久删除此项, 是否继续?', '提示',
                {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                  }).then(await () => {
                      await ${method}(this.${formObj})
                      this.$message.success('创建成功')
                  }).catch(() => {
                    this.$message({
                      type: 'info',
                      message: '已取消删除'
                    });
                });
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        }`;
      }

      if (confirmed) {
        return `${method}(formName) {
          this.$confirm('此操作将永久删除此项, 是否继续?', '提示',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(await () => {
                await ${method}(this.${formObj})
                this.$message.success('创建成功')
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
           });
          }
        `;
      }
      if (validated) {
        return `${method}(formName) {
          this.$refs[formName].validate(async (valid) => {
            if (valid) {
              await ${method}(this.${formObj})
              this.$message.success('创建成功')
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        }`;
      }
      return `async ${method}(){
          await ${method}(this.${formObj})
          this.$message.success('创建成功')
        }`;
    },
    genFormValidate() {},
    genFormItemUpsertButton(validated, ref, method) {
      if (validated) {
        return `<el-form-item>
    <el-button size='mini' type='primary' @click="${method}('${ref}')">创建</el-button>
  </el-form-item>`;
      } else {
        return `<el-form-item>
    <el-button size='mini' type='primary' @click='${method}'>创建</el-button>
  </el-form-item>`;
      }
    },
    genFormRef(validated, ref) {
      if (validated) {
        return `ref='${ref}'`;
      } else {
        return `\t`;
      }
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