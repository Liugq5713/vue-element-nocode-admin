export const genTableColumnSnippet = headers => {
  return headers
    .map(header => {
      genTabeleColumSinppetTemplate(header.label);
      return genTableColumSnippetSimple(header.value, header.label);
    })
    .join("\n      ");
};

const genTableColumSnippetSimple = (value, label) => {
  return `<el-table-column prop='${value}' label='${label}' align='center' />`;
};

const genTabeleColumSinppetTemplate = (value, label) => {
  return `<el-table-column label='${label}'  align='center'>
  <template slot-scope={row}>
    {{ ${value} }}
  </template>
</el-table-column>`;
};
