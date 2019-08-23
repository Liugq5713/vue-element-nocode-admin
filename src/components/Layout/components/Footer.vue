<template>
  <div>
    <div class="footer">
      <div @click="editDir">
        <i class="el-icon-folder" />
        {{ pwd }}
      </div>
    </div>
    <el-dialog
      title="选择生成文件的目录"
      :visible.sync="dialogFormVisible"
    >
      <PWDSelect @done="dialogFormVisible=false" />
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PWDSelect from "@/components/PWDSelect";
export default {
  components: {
    PWDSelect
  },
  data() {
    return {
      dialogFormVisible: false
    };
  },
  computed: {
    ...mapGetters(["pwd", "pwd_segments"])
  },

  created() {
    this.getPWD();
  },
  methods: {
    getPWD() {
      fetch("/api/pwd")
        .then(res => res.json())
        .then(res => {
          this.$store.commit("SET_PWD", res.data.pwd);
        });
    },
    editDir() {
      this.dialogFormVisible = true;
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
</style>
