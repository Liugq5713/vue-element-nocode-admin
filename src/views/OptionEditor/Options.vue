<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        <span>标签组</span>
      </div>
      <template v-for="opt in opts">
        <el-button
          :type="opt.tagType"
          :key="opt.value"
          @click="addOptionsToCopy(opt)"
        >{{opt[0].category}}</el-button>
      </template>
    </el-card>
    <el-card class="box-card my-1">
      <div slot="header">
        <span>标签池</span>
      </div>
      <template v-for="opt in options">
        <el-button
          size="mini"
          :type="opt.tagType"
          :key="opt.value"
          @click="addOptionsToCopy(opt)"
        >{{opt.label}} [ {{opt.value}} ]</el-button>
      </template>
    </el-card>
  </div>
</template>

<script>
import * as opts from "./opts.js";
export default {
  props: {
    optionsToCopy: {
      type: null
    }
  },
  data() {
    return {
      opts
    };
  },
  computed: {
    options() {
      let res = [];
      Object.keys(this.opts).map(key => {
        res = res.concat(this.opts[key]);
      });
      return res;
    }
  },
  methods: {
    addOptionsToCopy(opt) {
      this.$emit("update:optionsToCopy", opt);
    }
  }
};
</script>