<template>
  <el-collapse v-model="activeName" accordion>
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
import draggable from "vuedraggable";

const defaultProps = {
  label: "",
  value: "",
  isRequired: ""
};
export default {
  components: {
    draggable
  },
  data() {
    return {
      forms: [
        {
          type: "ERadio",
          title: "Radio 单选框",
          specs: [
            {
              type: "ERadio",
              title: "基础用法",
              props: { ...defaultProps }
            },
            {
              type: "ERadio",
              title: "Radio 单选框组",
              props: { ...defaultProps }
            }
          ]
        },
        {
          type: "ECheckbox",
          title: "Checkbox 多选框",
          specs: [
            {
              type: "ECheckbox",
              title: "Checkbox 单选框组",
              props: { ...defaultProps }
            }
          ]
        },
        {
          type: "EInput",
          title: "Input输入框",
          specs: [
            {
              type: "EInput",
              title: "Input 输入框",
              props: { ...defaultProps }
            }
          ]
        },
        {
          type: "ESelect",
          title: "Select 选择器",
          specs: [
            {
              type: "ESelect",
              title: "Select 单选框组",
              props: { ...defaultProps }
            }
          ]
        },
        {
          type: "ESwitch",
          title: "Switch开关",
          specs: [
            {
              type: "ESwitch",
              title: "Switch 单选框组",
              props: { ...defaultProps }
            }
          ]
        }
      ],
      activeName: ["ERadio"]
    };
  },
  methods: {
    cloneFormItem(val) {
      return { ...val };
    }
  }
};
</script>