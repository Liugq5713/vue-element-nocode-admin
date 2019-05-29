<template>
  <div class="code-container">
    <Drawer
      :openDrawer="openDrawer"
      triggerEvent="mouseover"
      controlOffset="20vh"
      contentSize="600px"
      :controls="controls"
    >
      <template v-slot:control="{drawer}">
        <el-button v-if="drawer.control.key==='copy'" size="mini" @click="copy">
          <span style="writing-mode: vertical-rl;">
            <i class="el-icon-copy-document" style="margin-bottom:4px"></i>
            {{$t('code.copy')}}
          </span>
        </el-button>
        <el-button size="mini" v-if="drawer.control.key==='look'" style="margin-left:-0px">
          <span style="writing-mode: vertical-rl;">
            <i
              :class="drawer.show?'el-icon-arrow-right':'el-icon-arrow-left'"
              class="el-icon-arrow-left"
              style="margin-bottom:4px"
            ></i>
            {{drawer.show?'隐藏':'显示'}}代码
          </span>
        </el-button>
      </template>
      <code class="code">
        <div style="overflow:auto">
          <pre>
    {{srcCode}}
    </pre>
        </div>
      </code>
    </Drawer>
    <!-- 为了粘贴出来有格式的代码 -->
    <code class="code" style="position:absolute;top:-999999px">
      <div style="overflow:auto">
        <pre ref="srcCode">
    {{srcCode}}
    </pre>
      </div>
    </code>
  </div>
</template>

<script>
/* eslint-disable no-useless-escape */
import { genVueFileWrapper } from "./vueSnippet.js";
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
      this.srcCode = genVueFileWrapper(data);
      window.localStorage.removeItem("vue-element-form-gen-code");
      window.localStorage.setItem("vue-element-form-gen-code", this.srcCode);
    },
    skipToEdit() {
      window.open(`./code-editor`, "_blank");
    },
    openDrawer(target) {
      let shouldOpen = true;
      while (!target.matches(".controls")) {
        if (target.matches(".control-0")) {
          shouldOpen = false;
          break;
        } else {
          target = target.parentNode;
        }
      }
      return shouldOpen;
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
  padding: 0px 20px;
  background-color: #f8f8f8;
}

.code-container >>> .control {
  padding: 0;
  border: 0;
}
</style>