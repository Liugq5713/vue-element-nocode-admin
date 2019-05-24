<template>
  <Drawer>
    <code class="code">
      <div style="overflow:auto">
        <pre ref="srcCode">
    {{srcCode}}
    </pre>
      </div>
    </code>
  </Drawer>
</template>

<script>
/* eslint-disable no-useless-escape */
import {
  _rules,
  _ref,
  _genFormItems,
  _upsertBtn,
  _genData,
  _genRules,
  _genSubmitMethod
} from "./vueSnippet.js";
import Drawer from "@/components/Drawer";

export default {
  components: {
    Drawer
  },
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
      validated: false,
      controls: [
        {
          key: "copy",
          show: "复制",
          hidden: "复制"
        },
        {
          key: "look",
          show: "查看",
          hidden: "隐藏"
        }
      ]
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
<el-form :model="${formObj}" ${_ref(validated, ref)}  ${_rules(
        validated
      )} label-width="80px">
  ${_genFormItems(formObj, validated, formItems)}
  ${_upsertBtn(validated, ref, method)}
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        ${_genData(formObj, formItems)},
        ${_genRules(validated, formItems)}
      }
    },
    methods: {
      ${_genSubmitMethod(validated, confirmed, formObj, method)}
    }
  }
<\/script>
`;
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