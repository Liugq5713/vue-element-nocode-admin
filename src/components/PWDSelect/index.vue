<template>
  <div>
    <div style="margin-bottom:10px;">
      <el-tag
        type="info"
        size="small"
        style="margin-right:3px"
        effect="dark"
        @click="setFilePathSegment('/')"
      >
        <i class="el-icon-monitor" />
      </el-tag>
      <el-tag
        v-for="(item,idx) in pwd_segments"
        :key="idx"
        type="info"
        size="small"
        style="margin-right:3px"
        effect="dark"
        @click="skipFilePathSegment(item,idx)"
      >
        {{ item }}
      </el-tag>
      <el-button
        size="mini"
        type="success"
        class="el-icon-star-off"
        @click="setCustomPWD"
      />
      <el-button
        size="mini"
        type="primary"
        @click="ensurePWD"
      >
        在此生成文件
      </el-button>
    </div>
    <ul>
      <li
        v-for="file in fileTree"
        :key="file"
        class="file-item"
        @click="addFilePathSegment(file)"
      >
        <i
          class="el-icon-folder"
          style="margin-right:10px"
        />
        {{ file }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      fileTree: []
    };
  },
  computed: {
    ...mapGetters(["pwd", "pwd_segments", "custom_pwds"])
  },
  watch: {
    pwd_segments: {
      handler() {
        this.getDir();
      },
      immediate: true
    }
  },
  methods: {
    getDir() {
      const dir_path = "/" + this.pwd_segments.join("/");
      fetch(`/api/dirs?pwd=${dir_path}`)
        .then(res => res.json())
        .then(res => {
          this.fileTree = res.data.files;
        });
    },
    addFilePathSegment(file_path) {
      this.$store.commit("ADD_PWD_SEGMENT", file_path);
    },
    setFilePathSegment() {
      this.$store.commit("SET_PWD_SEGMENTS", []);
    },
    skipFilePathSegment(file_path, idx) {
      this.$store.commit("SET_PWD_SEGMENTS", this.pwd_segments.slice(0, idx + 1));
    },
    ensurePWD() {
      this.$store.commit("SET_PWD", "/" + this.pwd_segments.join("/"));
      this.$emit("done");
    },
    setCustomPWD() {
      this.$store.commit("ADD_CUSTOM_PWDS", `/${this.pwd_segments.join("/")}`);
      this.$message.success("收藏成功");
    }
  }
};
</script>

<style  scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 5px;
  color: cornsilk;
  background: #1d2935;
}
.file-item {
  list-style-type: none;
  margin-left: -10px;
  font-size: 16px;
  padding: 5px;
  padding-left: 1rem;
}
ul {
  padding: 0;
  margin: 0;
}
.file-item:hover {
  background-color: #a5a5a5;
}
</style>
