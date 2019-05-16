<template>
  <div class="rightPanel-container" :class="{show:show}">
    <div class="rightPanel-background"/>
    <div class="rightPanel">
      <div class="btn--wrapper">
        <el-button size="mini" @click="copy">
          <span style="writing-mode: vertical-rl;">
            <i class="el-icon-copy-document" style="margin-bottom:4px"></i>
            {{$t('code.copy')}}
          </span>
        </el-button>
        <el-button size="mini" style="margin-left:-0px" @click="open">
          <span style="writing-mode: vertical-rl;">
            <i
              :class="show?'el-icon-arrow-right':'el-icon-arrow-left'"
              class="el-icon-arrow-left"
              style="margin-bottom:4px"
            ></i>
            {{show?'隐藏':'显示'}}代码
          </span>
        </el-button>
      </div>
      <div class="page" v-if="show">
        <slot ref="srcCode"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  watch: {
    show() {
      document.body.classList.toggle("showRightPanel");
    }
  },
  mounted() {
    window.addEventListener("click", this.closeSidebar);
  },
  destroyed() {
    window.removeEventListener("click", this.closeSidebar);
  },
  methods: {
    open() {
      this.show = !this.show;
    },
    closeSidebar(evt) {
      const parent = evt.target.closest(".rightPanel");
      if (!parent) {
        this.show = false;
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
    }
  }
};
</script>

<style scoped>
.showRightPanel {
  position: relative;
  width: calc(100% - 15px);
}

.rightPanel-background {
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
  background: rgba(0, 0, 0, 0.2);
  width: 0;
  height: 0;
  top: 0;
  left: 0;
  position: fixed;
  z-index: -1;
}
.rightPanel {
  background: #fff;
  z-index: 3000;
  position: fixed;
  height: 100vh;
  width: 100%;
  max-width: 260px;
  top: 0px;
  left: 0px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
  transition: all 0.25s cubic-bezier(0.7, 0.3, 0.1, 1);
  transform: translate(100%);
  z-index: 40000;
  left: auto;
  right: 0px;
}

.rightPanel >>> .el-button {
  padding: 12px 10px;
}

.btn--wrapper {
  position: absolute;
  left: -40px;
  right: 0;
  top: 30vh;
  width: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 200px;
}
.show {
  transition: all 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
}

.show .rightPanel-background {
  z-index: 20000;
  opacity: 1;
  width: 100%;
  height: 100%;
}
.show .rightPanel {
  transform: translate(0);
}
</style>
