<template>
  <el-button
    style="float: right; padding: 3px 0"
    type="text"
    @click="genLocalFile(srcFormCode,$event)"
  >
    生成代码
  </el-button>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["srcFormCode",'srcTableCode']),
    srcCode(){
      console.log("------rcCode -> this.$router", this.$route)
      if(this.$route.path.includes('form')){
        return this.srcFormCode
      }

      if(this.$route.path.includes('table')){
        return this.srcTableCode
      }
      return ''
    }
  },
  methods:{
    genLocalFile(){
console.log("TCL: genLocalFile -> this.srcCode", this.srcCode)
    }
  }
}
</script>
