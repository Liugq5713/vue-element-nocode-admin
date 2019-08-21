<template>
  <div class="footer">
    <i class="el-icon-folder" />
    {{ path }}
  </div>
</template>

<script>
  export default {
    data(){
      return {
        path:''
      }
    },
  created(){
    this.getPWD()
  },
 methods:{
    getPWD(){
      fetch('/api/pwd').then(res=>res.json()).then(res => {
        this.path = res.data.path
        console.log(res)
      })
    }
  }
  }
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
