<template>
  <div>
    <el-card class="box-card">
      <div
        slot="header"
      >
        <span>常用生成文件路径</span>
      </div>
      <div>
        当前生成路径：{{ pwd }}
      </div>
      <div>收藏的路径</div>
      <div
        v-for="(pwd,idx) in custom_pwds"
        :key="idx"
      >
        {{ pwd }}
        <el-button
          size="mini"
          icon="el-icon-check"
          @click="setPWD(pwd)"
        />
        <el-button
          size="mini"
          icon="el-icon-close"
          @click="remvoeCustomPWD(idx)"
        />
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
    setPWD(pwd) {
      this.$store.commit("SET_PWD", pwd);
    },
    remvoeCustomPWD(idx) {
      this.custom_pwds.splice(idx, 1);
    }
  }
};
</script>
