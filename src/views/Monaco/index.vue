<template>
  <div>
    <div
      id="monaco"
      style="height:100vh"
    />
  </div>
</template>

<script>
import * as monaco from "monaco-editor/esm/vs/editor/editor.main.js";
export default {
  data() {
    return {
      monacoInstance: ""
    };
  },
  computed: {
    codeType() {
      return this.$route.query.code;
    }
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
  mounted() {
    monaco.editor.setTheme("vs-dark");
    this.monacoInstance = monaco.editor.create(document.getElementById("monaco"), {
      value: this.code,
      language: "javascript"
    });
  },
  beforeDestroy() {
    this.monacoInstance.dispose();
  },
  methods: {
    getLocalTableCode() {
      this.code = window.localStorage.getItem("vue-element-table-gen-code");
    },
    getLocalFormCode() {
      this.code = window.localStorage.getItem("vue-element-form-gen-code");
    }
  }
};
</script>
