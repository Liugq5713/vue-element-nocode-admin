<template>
  <div>
    <div id="monaco" style="height:100vh"></div>
  </div>
</template>

<script>
import * as monaco from "monaco-editor/esm/vs/editor/editor.main.js";
export default {
  mounted() {
    monaco.editor.setTheme("vs-dark");
    this.monacoInstance = monaco.editor.create(document.getElementById("monaco"), {
      value: this.code,
      language: "javascript"
    });
  },
  data() {
    return {
      monacoInstance: ""
    };
  },
  watch: {
    codeType: {
      handler(val) {
        if (val === "table") {
          window.addEventListener("storage", () => {
            this.getLocalTableCode();
          });
          this.getLocalTableCode();
        } else {
          window.addEventListener("storage", () => {
            this.getLocalFormCode();
          });
          this.getLocalFormCode();
        }
      },
      immediate: true
    }
  },
  computed: {
    codeType() {
      return this.$route.query.code;
    }
  },
  methods: {
    getLocalTableCode() {
      this.code = window.localStorage.getItem("vue-element-table-gen-code");
    },
    getLocalFormCode() {
      this.code = window.localStorage.getItem("vue-element-form-gen-code");
    }
  },
  beforeDestroy() {
    this.monacoInstance.dispose();
  }
};
</script>