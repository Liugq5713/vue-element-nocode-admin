export const genSelectFormItem = (formObj, label, value) => {
  return `
  <el-form-item label="${label}">
    <el-select v-model="${formObj}.${value}" placeholder="请选择${label}">
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>`
}
