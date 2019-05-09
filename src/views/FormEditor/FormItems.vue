<template>
  <div>
    <div style="width:100%;">
      <el-form :model="form" label-width="100px">
        <draggable
          class="dragArea list-group"
          :options="{group: 'formItems'}"
          v-bind:class="{ bigDragArea: formItems.length===0 }"
          :list="formItems"
          @change="genFormItem"
        >
          <div class="list-group-item" v-for="(formItem,idx) in formItems" :key="idx">
            <div @click="genFormItemByClick(idx,formItem)" :class="{selected:idx===clickedIndex}">
              <el-form-item :label="formItem&&formItem.props.label||'表单label'">
                <component v-if="formItem" v-bind:is="formItem.type"></component>
              </el-form-item>
            </div>
          </div>
        </draggable>
      </el-form>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable
  },
  props: {
    store: {
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
      form: {}
    };
  },
  computed: {
    clickedIndex() {
      return this.store.states.clickedIndex;
    }
  },
  methods: {
    genFormItem(val) {
      if (val.added) {
        this.store.commit("setClickedIndex", val.added.newIndex);
        this.store.commit("setFormItemToHandle", val);
      }
    },
    genFormItemByClick(idx, element) {
      this.store.commit("setClickedIndex", idx);
      this.store.commit("setFormItemToHandle", {
        type: "click",
        idx,
        element
      });
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
  background-color: rgb(253, 247, 247);
  border: #f8d2d2 solid 1px;
  border-radius: 3%;
}
</style>
