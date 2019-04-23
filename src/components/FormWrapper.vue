<template>
  <el-container>
    <el-main>
      <FormAttribute style="margin-bottom:10px"/>
      <el-card class="box-card">
        <!-- background-color:rgb(190, 191, 190) -->
        <div style="width:100%;">
          <el-form :model="form" label-width="100px">
            <draggable
              class="dragArea list-group"
              :options="{group: 'formItems'}"
              v-bind:class="{ bigDragArea: list.length===0 }"
              :list="list"
              @change="genFormItem"
            >
              <div class="list-group-item" v-for="(element,idx) in list" :key="idx">
                <div @click="genFormItemByClick(idx,element)">
                  <el-form-item :label="element&&element.props.label||'表单label'">
                    <component v-if="element" v-bind:is="element.type"></component>
                  </el-form-item>
                </div>
              </div>
            </draggable>
          </el-form>
        </div>
      </el-card>
    </el-main>
    <el-aside width="500px">
      <FormItemAttribute :formItem="formItemAttribute" @change="setFormItemAttribute"/>
      <Asset/>
    </el-aside>
  </el-container>
</template>

<script>
import draggable from "vuedraggable";
import FormAttribute from "./FormAttribute";
import FormItemAttribute from "./FormItemAttribute";
import Asset from "./Asset";

export default {
  components: {
    Asset,
    FormAttribute,
    FormItemAttribute,
    draggable
  },
  data() {
    return {
      form: {
        isValidate: "",
        needConfirm: ""
      },
      formItemAttribute: {},
      list: []
    };
  },
  methods: {
    genFormItem(val) {
      if (val.added) {
        this.formItemAttribute = val;
      }
    },
    genFormItemByClick(idx, element) {
      this.formItemAttribute = { type: "click", idx, element };
    },
    setFormItemAttribute(type, idx, props) {
      if (type === "add") {
        const formItem = this.list[idx];
        formItem.props = {
          ...formItem.props,
          ...props
        };
      }
      if (type === "click") {
        const formItem = this.list[idx];
        formItem.props = {
          ...formItem.props,
          ...props
        };
      }
    }
  }
};
</script>

<style>
.bigDragArea {
  height: 400px;
}

.bigDragArea::after {
  content: "请将表单元素拖拽此处";
  height: 200px;
  font-size: 30px;
  color: #858585;
  font-weight: 300;
  text-align: center;
}
</style>
