<template>
  <el-container>
    <el-main>
      <el-card class="box-card">
        <div style="width:100%;height:500px;background-color:rgb(190, 191, 190)">
          <el-form :model="form" label-width="100px">
            <draggable
              class="dragArea list-group"
              group="formItems"
              v-model="list"
              @change="genFormItem"
            >
              <div class="list-group-item" v-for="(element,idx) in list" :key="idx">
                <div @click="genFormItemByClick(idx,element)">
                  <el-form-item :label="element.props.label||'表单label'">
                    <component v-bind:is="element.type"></component>
                  </el-form-item>
                </div>
              </div>
            </draggable>
          </el-form>
        </div>
      </el-card>
    </el-main>
    <el-aside width="400px">
      <el-card class="box-card">
        <Attribute :formItem="formItemAttribute" @change="setFormItemAttribute"/>
      </el-card>
      <el-card class="box-card" style="margin-top:10px">
        <Asset/>
      </el-card>
    </el-aside>
  </el-container>
</template>

<script>
import draggable from "vuedraggable";
import Asset from "./Asset";
import Attribute from "./Attribute";
import Radio from "./FormItem/Radio";
import Input from "./FormItem/Input";

export default {
  components: {
    Asset,
    Attribute,
    draggable,
    Radio,
    Input
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
      this.formItemAttribute = val;
    },
    genFormItemByClick(idx, element) {
      this.formItemAttribute = { type: "click", idx, element };
    },
    setFormItemAttribute(type, idx, props) {
      if (type === "add") {
        const formItem = this.list[this.list.length - 1];
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