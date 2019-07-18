<template>
<div class='app-container'>
     <div style='margin-bottom: 20px'>
       	
       <el-button type='primary' style='margin-left: 10px' icon='el-icon-search' @click='ByQuery'>搜索</el-button>
     </div>
   <el-table :data='s' border style='width: 100%'>
     <el-table-column label='操作' align='center'>
       <template slot-scope='scope'>
         <el-button size='mini' type='primary' @click=edit(scope.row)>编辑</el-button>
       </template>
     </el-table-column>
   </el-table>
   <pagination :total='total' :page.sync='query.cursor' :limit.sync='query.limit' @pagination='' /> 
</div>
</template>

<script>

import {  } from './api.js'

export default {
   data() {
     return {
       s: undefined,
       query: {
         limit: 20,
         cursor: 1
       },
       total: 0
     }
   },
   created() {
   this.()
    },
   methods: {
     async () {
       const res =await (this.query)
       this.s =res.data.items
       this.total =res.data.total_count
     },
     ByQuery(val) {
       this.query.cursor = 1
       this.()
      },
     edit(){
     }
   }
}
</script>