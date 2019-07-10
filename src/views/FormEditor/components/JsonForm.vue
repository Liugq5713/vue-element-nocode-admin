<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{$t('form.JSON')}}</span>
        <el-button size="mini" type="primary" style="float:right" @click="gen">生成表单</el-button>
      </div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 5}"
        placeholder="请输入内容, eg:{value:label}，记得给label加上引号"
        v-model="formJson"
      ></el-input>
    </el-card>
  </div>
</template>

<script>
import { isObject, isArray } from "@/utils";
export default {
  data() {
    return {
      formJson: undefined
    };
  },
  methods: {
    flattening(data, pre_value) {
      if (!isObject(data)) {
        this.$message.error("对象格式不正确");
      }
      if (isArray(data)) {
        this.$message.error("不支持数组嵌套数组");
      }
      let tmp = [];
      Object.keys(data).map(item => {
        if (isObject(data[item])) {
          if (isArray(data[item])) {
            data[item].map((arr_item, idx) => {
              const pre = pre_value ? `${pre_value}${item}[${idx}].` : `${item}[${idx}].`;
              const res = this.flattening(arr_item, pre);
              tmp = tmp.concat(res);
            });
          } else {
            let pre = pre_value ? `${pre_value}${item}.` : `${item}.`;
            const res = this.flattening(data[item], pre);
            tmp = tmp.concat(res);
          }
        } else {
          const value = pre_value ? `${pre_value}${item}` : item;
          tmp.push({
            type: "EInputTrim",
            title: "JSON生成",
            props: {
              label: `${data[item] || item}`,
              value,
              required: ""
            }
          });
        }
      });
      return tmp;
    },

    gen() {
      try {
        const formData = eval(`(${this.formJson})`);
        const formItems = this.flattening(formData);
        this.$store.commit("SET_FORMITEMS", formItems);
      } catch (error) {
        this.$message.error("请填入正确的Object");
      }
    }
  }
};
</script>