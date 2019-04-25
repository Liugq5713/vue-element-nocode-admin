<template>
  <el-container>
    <el-aside width="300px">
      <Asset/>
    </el-aside>
    <el-main>
      <FormAttribute style="margin-bottom:10px" @change="setFormAttribute"/>
      <el-card class="box-card">
        <el-row :gutter="20">
          <el-col :span="16">
            <!-- background-color:rgb(190, 191, 190) -->
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
                    <div
                      @click="genFormItemByClick(idx,formItem)"
                      :class="{selected:idx===clickedIndex}"
                    >
                      <el-form-item :label="formItem&&formItem.props.label||'表单label'">
                        <component v-if="formItem" v-bind:is="formItem.type"></component>
                      </el-form-item>
                    </div>
                  </div>
                </draggable>
              </el-form>
            </div>
          </el-col>
          <el-col :span="8">
            <FormItemAttribute :formItem="formItemAttribute" @change="setFormItemAttribute"/>
          </el-col>
        </el-row>
      </el-card>
    </el-main>
    <el-aside width="400px">
      <FormCode :form="form" :formItems="formItems"/>
    </el-aside>
  </el-container>
</template>

<script>
import draggable from "vuedraggable";
import FormAttribute from "./FormAttribute";
import FormItemAttribute from "./FormItemAttribute";
import Asset from "./Asset";
import FormCode from "./FormCode";

export default {
  components: {
    Asset,
    FormAttribute,
    FormItemAttribute,
    FormCode,
    draggable
  },
  data() {
    return {
      clickedIndex: -1,
      form: {},
      formItemAttribute: {},
      formItems: []
    };
  },
  methods: {
    genFormItem(val) {
      if (val.added) {
        this.clickedIndex = val.added.newIndex;
        this.formItemAttribute = val;
      }
    },
    genFormItemByClick(idx, element) {
      this.clickedIndex = idx;
      this.formItemAttribute = { type: "click", idx, element };
    },
    setFormAttribute(val) {
      this.form = val;
    },
    setFormItemAttribute(type, idx, props) {
      if (type === "add") {
        const formItem = this.formItems[idx];
        formItem.props = {
          ...formItem.props,
          ...props
        };
      }
      if (type === "click") {
        const formItem = this.formItems[idx];
        formItem.props = {
          ...formItem.props,
          ...props
        };
      }
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
  margin:4px 0;
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
