<template>
  <el-collapse>
    <el-collapse-item v-for="(form,idx) in forms" :title="form.title" :key="idx" :name="idx">
      <draggable
        class="dragArea list-group"
        :list="form.specs"
        group="{name:'formItems', pull: 'clone', put: false }"
        :clone="cloneFormItem"
      >
        <div class="list-group-item" v-for="(element,idx) in form.specs" :key="idx">
          {{ element.type }}
          <Radio/>
        </div>
      </draggable>
    </el-collapse-item>
  </el-collapse>
</template>


<script>
import Radio from "./FormItem/Radio";
import draggable from "vuedraggable";
export default {
  components: {
    Radio,
    draggable
  },
  data() {
    return {
      forms: [
        {
          type: "radio",
          title: "Radio 单选框",
          specs: [
            {
              type: "radio_base",
              title: "基础用法",
              props: {}
            },
            {
              type: "radio_group",
              title: "Radio 单选框组",
              props: {}
            }
          ]
        },
        {
          type: "checkbox",
          title: "Checkbox 多选框",
          specs: [{ title: "Input 输入框", name: "cat 9", id: 9 }]
        },
        {
          type: "input",
          title: "Input输入框",
          specs: [{ title: "Input 输入框" }]
        },
        {
          type: "select",
          title: "Select 选择器",
          specs: [{ title: "Input 输入框" }]
        },
        {
          type: "switch",
          title: "Switch开关",
          specs: [{ title: "Input 输入框" }]
        }
      ],
      activeNames: ["1"]
    };
  },
  methods: {
    cloneFormItem(val) {
      console.log("val", val);
      return { ...val };
    }
  }
};
</script>