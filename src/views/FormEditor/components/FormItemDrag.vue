<template>
  <el-card
    class="box-card"
    style="margin-top:10px"
  >
    <span
      v-for="(form,idx) in forms"
      :key="idx"
    >
      <template v-for="(element,index) in form.specs">
        <el-button
          :key="index"
          round
          size="small"
          style="margin:10px;padding: 10px"
          plain
          @click="addFormItem(element)"
        >
          {{ element.title }}
        </el-button>
      </template>
    </span>
  </el-card>
</template>


<script>
const defaultProps = {
  label: "",
  value: "",
  required: "",
  type: ""
};
export default {
  components: {
  },
  data() {
    return {
      forms: [
        {
          type: "EInput",
          title: "Input输入框",
          specs: [
            {
              type: "EInputTrim",
              title: "Input Trim",
              props: { ...defaultProps }
            },
            {
              type: "EInputNum",
              title: "Input Number",
              props: { ...defaultProps }
            }
          ]
        },
        {
          type: "ERadio",
          title: "Radio 单选框",
          specs: [
            {
              type: "ERadio",
              title: "Radio",
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
              title: "Checkbox ",
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
              title: "Select",
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
              title: "Switch ",
              props: { ...defaultProps }
            }
          ]
        }
      ],
      activeName: ["EInput"]
    };
  },
  methods: {
    addFormItem(val) {
      this.$store.commit("ADD_FORMITEM_OF_ITEMS", val);
    }
  }
};
</script>
