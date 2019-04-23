export const genInputFormItem = (formObj, label, value) => {
  return `
   <el-form-item label="${label}">
    <el-input v-model="${formObj}.${value}"></el-input>
  </el-form-item>
  `
}

export const genSelectFormItem = (formObj, label, value) => {
  return `
  <el-form-item label="${label}">
    <el-select v-model="${formObj}.${value}" placeholder="请选择${label}">
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>`
}

export const genCheckboxFormItem = (formObj, label, value) => {
  return `
  <el-form-item label="${label}">
     <el-checkbox-group v-model="${formObj}.${value}">
      <el-checkbox label="第一个复选框" name="type"></el-checkbox>
      <el-checkbox label="第二个复选框" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>`
}
export const genRadioFormItem = (formObj, label, value) => {
  return `
  <el-form-item label="${label}">
    <el-radio-group v-model="${formObj}.${value}">
      <el-radio label="第一个选项"></el-radio>
      <el-radio label="第二个选项"></el-radio>
    </el-radio-group>
  </el-form-item>`
}
export const genSwitchFormItem = (formObj, label, value) => {
  return `
  <el-form-item label="${label}">
    <el-switch v-model="${formObj}.${value}"></el-switch>
  </el-form-item>`
}

export default function(type) {
  const typeFuncMap = {
    EInput: genInputFormItem,
    ECheckbox: genCheckboxFormItem,
    ERadio: genRadioFormItem,
    ESelect: genSelectFormItem,
    ESwitch: genSwitchFormItem
  }

  return typeFuncMap[type]
}
