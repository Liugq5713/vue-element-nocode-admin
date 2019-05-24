<template>
  <div class="drawer__container" :class="[positionClass,{'drawer__container--show':show}]">
    <div class="drawer__container-bg"/>
    <div ref="drawer" class="drawer">
      <div class="controls__container" ref="controls__container">
        <ul
          class="controls"
          @click="toggleDrawerShowByClick"
          @mouseover="toggleDrawerShowByMouseover"
        >
          <li
            v-for="(control,idx) in controlItems"
            class="control"
            :class="'control-'+idx"
            :key="idx"
          >
            <template v-if="show">
              <slot name="control" v-bind:drawer="{show,control}">{{control.hidden}}</slot>
            </template>
            <template v-else>
              <slot name="control" v-bind:drawer="{show,control}">{{control.show}}</slot>
            </template>
          </li>
        </ul>
      </div>
      <div class="content" v-if="show">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  props: {
    triggerEvent: {
      type: String,
      default: "click"
    },
    controls: {
      type: [Object, Array],
      default: () => {
        return {
          show: "显示",
          hidden: "隐藏"
        };
      }
    },
    position: {
      type: String,
      default: "right",
      validator: function(value) {
        return ["top", "right", "bottom", "left"].indexOf(value) !== -1;
      }
    },
    controlOffset: {
      type: [String, Number],
      default: 400
    },
    contentSize: {
      type: [String, Number],
      default: 300
    },
    openDrawer: {
      type: Function
    }
  },
  data() {
    return {
      show: false,
      lock: undefined,
      positionClass: this.position
    };
  },
  watch: {
    show(value) {
      if (value && !this.clickNotClose) {
        this.addCloseSidebarListener();
      }
      if (value) {
        document.body.classList.add("hidden_scoll_bar");
      } else {
        document.body.classList.remove("hidden_scoll_bar");
      }

      this.$nextTick(() => {
        this.updateControlLayout();
      });
    }
  },
  computed: {
    controlItems() {
      if (Array.isArray(this.controls)) {
        return this.controls;
      } else {
        return [this.controls];
      }
    },
    lockedShow: {
      get() {
        return this.show;
      },
      set(val) {
        if (this.lock) {
          return;
        } else {
          this.lock = setTimeout(() => {
            this.lock = undefined;
          }, 200);
          this.show = val;
        }
      }
    },
    isHorizontal() {
      return ["left", "right"].includes(this.position);
    },
    isVertical() {
      return ["bottom", "top"].includes(this.position);
    }
  },
  mounted() {
    let controlOffset = this.controlOffset;
    let contentSize = this.contentSize;
    if (typeof controlOffset === "number") {
      controlOffset = `${controlOffset}px`;
    }
    if (typeof contentSize === "number") {
      contentSize = `${contentSize}px`;
    }
    if (this.isVertical) {
      this.$refs["controls__container"].style["left"] = controlOffset;
      this.$refs["drawer"].style.maxHeight = contentSize;
    }
    if (this.isHorizontal) {
      this.$refs["controls__container"].style["top"] = controlOffset;
      this.$refs["drawer"].style.maxWidth = contentSize;
    }
    this.updateControlLayout();
  },
  destroyed() {
    this.removeCloseSidebarListener();
  },
  methods: {
    toggleDrawerShowByClick(evt) {
      if (this.triggerEvent !== "click") {
        return;
      }
      this.show ? this.closeDrawerByControl() : this.openDrawerByControl(evt);
    },
    toggleDrawerShowByMouseover(evt) {
      if (this.triggerEvent !== "mouseover") {
        return;
      }
      this.show ? this.closeDrawerByControl() : this.openDrawerByControl(evt);
    },
    openDrawerByControl(evt) {
      const onOpenDraw = this.openDrawer;
      if (!onOpenDraw) {
        this.lockedShow = true;
        return;
      }
      const target = evt.target;
      const currentTarget = evt.currentTarget;
      this.lockedShow = onOpenDraw(target, currentTarget);
    },
    closeDrawerByControl() {
      this.lockedShow = false;
    },
    closeSidebar(evt) {
      const parent = evt.target.closest(".drawer");
      if (!parent) {
        this.show = false;
        this.removeCloseSidebarListener();
      }
    },
    addCloseSidebarListener() {
      if (this.triggerEvent === "click") {
        window.addEventListener("click", this.closeSidebar);
      }
      if (this.triggerEvent === "mouseover") {
        window.addEventListener("mouseover", this.closeSidebar);
      }
    },
    removeCloseSidebarListener() {
      if (this.triggerEvent === "click") {
        window.removeEventListener("click", this.closeSidebar);
      }
      if (this.triggerEvent === "mouseover") {
        window.removeEventListener("mouseover", this.closeSidebar);
      }
    },
    updateControlLayout() {
      const controlsContainerEl = this.$refs["controls__container"];
      const rect = controlsContainerEl.getBoundingClientRect();
      if (this.position === "top") {
        controlsContainerEl.style["bottom"] = `-${rect.height}px`;
      }
      if (this.position === "bottom") {
        controlsContainerEl.style["top"] = `-${rect.height}px`;
      }
      if (this.position === "right") {
        controlsContainerEl.style["left"] = `-${rect.width}px`;
      }
      if (this.position === "left") {
        controlsContainerEl.style["right"] = `-${rect.width}px`;
      }
    }
  }
};
</script>

<style>
.hidden_scoll_bar {
  overflow: hidden;
}
</style>

<style scoped>
.drawer__container--show {
  transition: all 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
}

.drawer__container--show .drawer__container-bg {
  opacity: 1;
  width: 100%;
  height: 100%;
  z-index: 20001;
}

.drawer__container--show .drawer {
  transform: translate(0) !important;
  z-index: 40000;
}
.drawer__container-bg {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
  background: rgba(0, 0, 0, 0.2);
  z-index: -1;
}

.drawer {
  position: fixed;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.7, 0.3, 0.1, 1);
  background: #fff;
  z-index: 20000;
}
.top .drawer {
  height: 100%;
  width: 100vw;
  transform: translate(0, -100%);
  top: 0;
  left: 0;
}
.bottom .drawer {
  height: 100%;
  width: 100vw;
  transform: translate(0, 100%);
  bottom: 0;
  left: 0;
}
.left .drawer {
  height: 100vh;
  width: 100%;
  transform: translate(-100%, 0);
  top: 0;
  left: 0;
}
.right .drawer {
  height: 100vh;
  width: 100%;
  transform: translate(100%, 0);
  top: 0;
  right: 0;
}

.controls__container {
  position: absolute;
  box-sizing: border-box;
  color: #606266;
  cursor: pointer;
}

.controls {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

.control {
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.top .control,
.bottom .control {
  margin-left: 10px;
}
.left .control,
.right .control {
  margin-top: 10px;
}

.left .controls,
.right .controls {
  flex-direction: column;
}

.content {
  padding: 10px;
}
</style>
