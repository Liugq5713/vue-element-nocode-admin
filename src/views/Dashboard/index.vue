<template>
  <div>
    <el-card class="box-card">
      <div
        slot="header"
      >
        <span>常用生成文件路径</span>
      </div>
      <div
        v-for="(pwd,idx) in custom_pwds"
        :key="idx"
      >
        {{ pwd }}
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      custom_pwds: []
    };
  },
  computed: {
    ...mapGetters(["pwd", "pwd_segments"])
  },
  created() {
    const custom_pwds_str = localStorage.getItem("ele-cli-custom_pwd_list");
    if (custom_pwds_str) {
      this.custom_pwds = JSON.parse(custom_pwds_str);
    }
  },
  methods: {
    test() {
      fetch("/api/post", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify({ test: "我喜欢你" }) // body data type must match "Content-Type" header
      });
    }
  }
};
</script>
