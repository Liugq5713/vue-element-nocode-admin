<template>
  <div style="width:100%;height:500px;background-color:rgb(190, 191, 190)">
    <draggable class="dragArea list-group" group="formItems" v-model="list" @change="genFormItem">
      <div
        class="list-group-item"
        v-for="element in list"
        :key="element.id"
      >{{ element.name }},{{ element.type }}</div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: { draggable },
  data() {
    return {
      list: [
        {
          type: "radio_base",
          title: "基础用法",
          props: {}
        }
      ]
    };
  },
  methods: {
    genFormItem(val) {
      console.log(this.list);
      console.log("val", val);
    }
  }
};
</script>