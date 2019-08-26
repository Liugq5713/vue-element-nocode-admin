<template>
  <div>
    <el-card class="box-card">
      <div
        slot="header"
      >
        <span>常用生成文件路径</span>
      </div>
      <div>
        <h3>当前生成路径：</h3>{{ pwd }}
      </div>
      <h3>收藏的路径</h3>
      <div
        v-for="(pwd,idx) in custom_pwds"
        :key="idx"
        style="margin:10px"
      >
        <el-button
          size="mini"
          icon="el-icon-check"
          @click="setPWD(pwd,idx)"
        />
        <el-button
          size="mini"
          icon="el-icon-delete"
          @click="remvoeCustomPWD(idx)"
        />
        {{ pwd }}
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["pwd", "pwd_segments", "custom_pwds"])
  },
  created() {
    const custom_pwds_str = localStorage.getItem("ele-cli-custom_pwd_list");
    if (custom_pwds_str) {
      const custom_pwds = JSON.parse(custom_pwds_str);
      this.$store.commit("SET_CUSTOM_PWDS", custom_pwds);
      this.$store.commit("SET_PWD", custom_pwds[0]);
    }
  },
  methods: {
    setPWD(pwd, idx) {
      this.$store.commit("SET_PWD", pwd);
      this.$store.commit("EXCHANGE_CUSTOM_PWDS", idx);
    },
    remvoeCustomPWD(idx) {
      this.$store.commit("DELETE_CUSTOM_PWDS", idx);
    }
  }
};
</script>
