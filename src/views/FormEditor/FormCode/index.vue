<template>
  <div class="code-container"></div>
</template>

<script>
/* eslint-disable no-useless-escape */
import { mapGetters } from "vuex";

import { genVueFileWrapper } from "./snippetVue";

export default {
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
  computed: {
    ...mapGetters(["formAttribute", "formItems"])
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
        this.genVueFile(this.formAttribute, val);
      },
      deep: true
    }
  },
  created() {
    this.genVueFile(this.formAttribute, this.formItems);
  },
  methods: {
    genVueFile(formAttribute, formItems) {
      const data = {
        ref: formAttribute.ref,
        formObj: formAttribute.formObj,
        method: formAttribute.method,
        validated: formAttribute.validated,
        confirmed: formAttribute.confirmed,
        formItems: formItems
      };
      this.srcCode = genVueFileWrapper(data);
      this.$store.commit("SET_SRC_FORM_CODE", this.srcCode);
      window.localStorage.removeItem("vue-element-form-gen-code");
      window.localStorage.setItem("vue-element-form-gen-code", this.srcCode);
    },
    skipToEdit() {
      window.open(`./code-editor`, "_blank");
    },
    openDrawer(target) {
      let shouldOpen = true;
      while (!target.matches(".controls")) {
        if (target.matches(".control-0") || target.matches(".control-2")) {
          shouldOpen = false;
          break;
        } else {
          target = target.parentNode;
        }
      }
      return shouldOpen;
    }
  }
};
</script>

<style scoped>
.code {
  padding: 0px 20px;
  background-color: #f8f8f8;
}

.code-container >>> .control {
  padding: 0;
  border: 0;
  background-color: #fff0;
}
</style>