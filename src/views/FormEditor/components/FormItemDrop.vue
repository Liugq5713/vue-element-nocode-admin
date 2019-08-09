<template>
  <el-card class="box-card">
     <div slot="header" class="clearfix">
      <el-button style="float: right; padding: 3px 10px" type="text" @click="skipToEditor">在线编辑</el-button>
      <el-button
        style="float: right; padding: 3px 0"
        type="text"
        @click="handleClipboard(srcFormCode,$event)"
      >复制代码</el-button>
    </div>
    <div style="width:100%;">
      <el-form :model="form" label-width="140px">
        <draggable
          class="dragArea list-group"
          :options="{group: 'formItemsToDrop'}"
          v-bind:class="{ bigDragArea: formItemsToDrop.length===0 }"
          :list="formItemsToDrop"
          @change="genFormItem"
        >
          <div class="list-group-item" v-for="(formItem,idx) in formItemsToDrop" :key="idx">
            <div @click="genFormItemByClick(idx,formItem)" :class="{selected:idx===clickedIndex}">
              <el-form-item :label="formItem&&formItem.props.label||'表单label'">
                <component style="width:90%" v-if="formItem" v-bind:is="formItem.type"></component>
              </el-form-item>
            </div>
          </div>
        </draggable>
      </el-form>
    </div>
  </el-card>
</template>

<script>
import draggable from "vuedraggable";
import { mapGetters } from "vuex";
import { handleClipboard } from "@/utils";

export default {
  components: {
    draggable
  },
  data() {
    return {
      form: {},
      formItemsToDrop: []
    };
  },
  watch: {
    formItems(val) {
      this.formItemsToDrop = JSON.parse(JSON.stringify(val));
    }
  },
  //clickedIndex
  computed: {
    ...mapGetters(["clickedIndex", "formItems", "srcFormCode"])
  },
  methods: {
    genFormItem(val) {
      this.$store.commit("SET_FORMITEMS", this.formItemsToDrop);
      if (val.added) {
        this.$store.commit("SET_CLICKED_INDEX", val.added.newIndex);
        this.$store.commit("SET_FORMITEM_HANDLE", val);
      }
    },
    genFormItemByClick(idx, element) {
      this.$store.commit("SET_CLICKED_INDEX", idx);
      this.$store.commit("SET_FORMITEM_HANDLE", {
        type: "click",
        idx,
        element
      });
    },
    handleClipboard(text, evnet) {
      handleClipboard(text, evnet)
        .then(() => {
          this.$message.success("已经复制到剪贴板");
        })
        .catch(() => {
          this.$message.error("未能复制到剪贴板");
        });
    },
    skipToEditor() {
      this.$router.push("code-editor?code=form");
    }
  }
};
</script>


<style scoped>
.bigDragArea {
  height: 300px;
}

.bigDragArea::after {
  content: "请将表单元素拖拽此处";
  height: 200px;
  font-size: 30px;
  color: #858585;
  font-weight: 300;
  text-align: center;
}

.el-form-item {
  margin: 4px 0;
}

.dragArea {
  min-height: 300px;
}

.selected {
  border: 1px dashed #409eff;
  border-radius: 3%;
}
</style>
