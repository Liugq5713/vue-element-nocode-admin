export const genTableColumnSnippet = headers => {
  return headers
    .filter(header => {
      return header.show;
    })
    .map(header => {
      if (timeFieldNeedHandle[header.key] || header.opt === "template") {
        return genTabeleColumSinppetTemplate(header.key, header.label);
      } else {
        return genTableColumSnippetSimple(header.key, header.label);
      }
    })
    .join("\n      ");
};

const genTableColumSnippetSimple = (key, label) => {
  return `<el-table-column prop='${key}' label='${label}' align='center' />`;
};

const genTabeleColumSinppetTemplate = (key, label) => {
  let val = "";
  if (timeFieldNeedHandle[key]) {
    val = `parseTime(row.${key})`;
  } else {
    val = `${key}`;
  }
  return `<el-table-column label='${label}'  align='center'>
          <template slot-scope={row}>
            {{ row.${val} }}
          </template>
        </el-table-column>`;
};

const timeFieldNeedHandle = {
  created_at: true,
  create_time: true,
  updated_at: true,
  update_time: true,
  start_time: true,
  end_time: true
};
