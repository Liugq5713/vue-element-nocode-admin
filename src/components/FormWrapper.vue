<template>
  <el-container>
    <el-main>
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
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>表单元素属性编辑</span>
        </div>
        <Attribute :formItem="formItemAttribute" @change="setFormItemAttribute"/>
      </el-card>
      <el-card class="box-card" style="margin-top:10px">
        <div slot="header" class="clearfix">
          <span>表单元素资源</span>
        </div>
        <Asset/>
      </el-card>
    </el-aside>
  </el-container>
</template>

<script>
import draggable from "vuedraggable";
import Asset from "./Asset";
import Attribute from "./Attribute";

export default {
  components: {
    Asset,
    Attribute,
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
