export const genTableInputTrimQuery=(query,changeCallback)=>{
  return `<el-input v-model.trim='query.${query}' placeholder='请输入${query}'  style='width:200px' @keyup.enter.native='${changeCallback}' />`
}

export const genTableInputNumberQuery=(query,changeCallback)=>{
  return `<el-input v-model.number='query.${query}' placeholder='请输入${query}' style='width:200px' type='number' @keyup.enter.native='${changeCallback}'></el-input>`
}

export const genTableCheckBoxQuery=(query,changeCallback)=>{
  return `<el-checkbox v-model='query.${query}' label='true' @change='${changeCallback}'></el-checkbox>`
}

export const genTableSelectQuery=(query,changeCallback)=>{
  return `<el-select v-model='query.${query}' clearable placeholder='请选择${query}' @change='${changeCallback}'>
          <el-option v-for='item in ' :key='item.value' :label='item.label' :value='item.value'>
        </el-option>
      </el-select>`
}

export const rangeTimeQuery=(changeCallback)=>{
  return `<date-range :start.sync='query.start_time' :end.sync='query.end_time' @change='${changeCallback}' />`
}