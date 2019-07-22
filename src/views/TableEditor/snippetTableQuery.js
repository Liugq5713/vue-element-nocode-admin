export const genTableQuery = (headers, changeCallback) => {
  return headers
    .filter(header => {
      return header.query;
    })
    .map(header => {
      if (typeof header.value === "number") {
        return genTableInputNumberQuery(header.key, changeCallback);
      }
      if (typeof header.value === "string") {
        return genTableInputTrimQuery(header.key, changeCallback);
      }
      if (typeof header.value === "boolean") {
        return genTableCheckBoxQuery(header.key, changeCallback);
      }
      if (header.key === "start_time" || header.key === "end_time") {
        return genTableRangeTimeQuery(changeCallback);
      }
    })
    .join("\n      ");
};

const genTableInputTrimQuery = (query, changeCallback) => {
  return `<el-input v-model.trim='query.${query}' placeholder='请输入${query}'  style='width:200px' @keyup.enter.native='${changeCallback}' />`;
};

const genTableInputNumberQuery = (query, changeCallback) => {
  return `<el-input v-model.number='query.${query}' placeholder='请输入${query}' style='width:200px' type='number' @keyup.enter.native='${changeCallback}'></el-input>`;
};

const genTableCheckBoxQuery = (query, changeCallback) => {
  return `<el-checkbox v-model='query.${query}' label='true' @change='${changeCallback}'></el-checkbox>`;
};

// const genTableSelectQuery = (query, changeCallback) => {
//   return `<el-select v-model='query.${query}' clearable placeholder='请选择${query}' @change='${changeCallback}'>
//           <el-option v-for='item in ' :key='item.value' :label='item.label' :value='item.value'>
//         </el-option>
//       </el-select>`;
// };

const genTableRangeTimeQuery = changeCallback => {
  return `<date-range :start.sync='query.start_time' :end.sync='query.end_time' @change='${changeCallback}' />`;
};
