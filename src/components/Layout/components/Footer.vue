<template>
  <div>
    <div class="footer">
      <div @click="getDir">
        <i class="el-icon-folder" />
        {{ pwd }}
      </div>
    </div>
    <el-dialog
      title="选择生成文件的目录"
      :visible.sync="dialogFormVisible"
    >
      <div style="margin-bottom:10px;">
        <el-tag
          v-for="(item,idx) in file_path_segments"
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
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        pwd:'',
        file_path_segments:[],
        fileTree:[],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        dialogFormVisible:false
      }
    },
    watch:{
      file_path_segments(){
        this.getDir()
      }
    },
  created(){
    this.getPWD()
  },
 methods:{
    getPWD(){
      fetch('/api/pwd').then(res=>res.json()).then(res => {
        this.pwd = res.data.pwd
        this.file_path_segments=this.pwd.split('/').filter(i=>i)
      })
    },
    getDir(){
      const dir_path = '/'+this.file_path_segments.join('/')
      fetch(`/api/dirs?pwd=${dir_path}`).then(res=>res.json()).then(res=>{
          this.dialogFormVisible=true
          this.fileTree=res.data.files
          console.log("TCL: getDir -> res.data.files", res.data.files)
        })
    },
    addFilePathSegment(file_path){
      console.log("TCL: addFilePathSegment -> file_path", file_path)
      this.file_path_segments.push(file_path)
    },
    skipFilePathSegment(file_path,idx){
      this.file_path_segments=this.file_path_segments.slice(0,idx+1)
    },
    ensurePWD(){
      this.pwd= '/'+this.file_path_segments.join('/')
      this.dialogFormVisible = false
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
