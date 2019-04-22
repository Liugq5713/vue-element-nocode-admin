<template>
  <el-collapse>
    <el-collapse-item v-for="(form,idx) in forms" :title="form.title" :key="idx" :name="form.type">
      <draggable
        class="dragArea list-group"
        :list="form.specs"
        :group="{ name: 'formItems', pull: 'clone', put: false }"
        :clone="cloneFormItem"
      >
        <div class="list-group-item" v-for="(element,idx) in form.specs" :key="idx">
          <el-button size="small" style="margin:10px;padding: 10px" plain>
            <component v-bind:is="element.type"></component>
          </el-button>
        </div>
      </draggable>
    </el-collapse-item>
  </el-collapse>
</template>


<script>
import Radio from "./FormItem/Radio";
import Input from "./FormItem/Input";
import draggable from "vuedraggable";

const defaultProps = {
  label: "",
  value: "",
  isRequired: ""
};
export default {
  components: {
    Radio,
    Input,
    draggable
  },
  data() {
    return {
      forms: [
        {
          type: "Radio",
          title: "Radio 单选框",
          specs: [
            {
              type: "Radio",
              title: "基础用法",
              props: { ...defaultProps }
            },
            {
              type: "Radio",
              title: "Radio 单选框组",
              props: { ...defaultProps }
            }
          ]
        },
        {
          type: "Checkbox",
          title: "Checkbox 多选框",
          specs: [{ title: "Input 输入框", name: "cat 9", id: 9 }]
        },
        {
          type: "Input",
          title: "Input输入框",
          specs: [
            {
              type: "Input",
              title: "Input 输入框",
              props: { ...defaultProps }
            }
          ]
        },
        {
          type: "Select",
          title: "Select 选择器",
          specs: [{ title: "Input 输入框" }]
        },
        {
          type: "Switch",
          title: "Switch开关",
          specs: [{ title: "Input 输入框" }]
        }
      ],
      activeNames: ["Radio"]
    };
  },
  methods: {
    cloneFormItem(val) {
      return { ...val };
    }
  }
};
</script>