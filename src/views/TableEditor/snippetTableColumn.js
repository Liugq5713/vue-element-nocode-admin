export const genTableColumnSnippet = headers => {
  return headers.filter(header=>{
    return header.show
  })
    .map(header => {
      if(timeFieldNeedHandle[header.value]||header.opt==='template'){
        return genTabeleColumSinppetTemplate(header.value,header.label);
      }else{
        return genTableColumSnippetSimple(header.value, header.label);
      }
    })
    .join("\n      ");
};

const genTableColumSnippetSimple = (value, label) => {
  return `<el-table-column prop='${value}' label='${label}' align='center' />`;
};

const genTabeleColumSinppetTemplate = (value, label) => {
  let val=''
  if(timeFieldNeedHandle[value]){
    val = `parseTime(row.${value})`
  }else{
    val = `${value}`
  }
  return `<el-table-column label='${label}'  align='center'>
          <template slot-scope={row}>
            {{ ${val} }}
          </template>
        </el-table-column>`;
};

const timeFieldNeedHandle ={
  created_at:true,
  create_time:true,
  updated_at:true,
  update_time:true,
  start_time:true,
  end_time:true

}
