<template>
  <div class="header">
    <div class="logo">
      <img width="200px" style="position:absolute;top:-80px;left:20px" :src="logo" alt="logo">
    </div>
    <div style="padding-top:10px;float:right;padding-right:10px">
      <router-link to="code-editor" target="_blank">
        <el-button
          size="mini"
          style="margin-left:10px"
          icon="el-icon-edit"
          type="success"
        >{{ $t("header.editor") }}</el-button>
      </router-link>
      <el-select
        size="mini"
        style="width:100px;margin-left:10px"
        v-model="lang"
        clearable
        placeholder="中文/En"
        @change="handleSetLanguage"
      >
        <el-option label="中文" value="zh"></el-option>
        <el-option label="English" value="en"></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import logo from "./just-font-monochrome-white.png";
export default {
  data() {
    return {
      logo,
      lang: this.$i18n.locale
    };
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 100%;
  background-color: rgb(24, 23, 23);
}
</style>
