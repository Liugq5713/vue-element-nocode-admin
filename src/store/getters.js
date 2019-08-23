const getters = {
  clickedIndex: state => state.form.clickedIndex,
  formAttribute: state => state.form.formAttribute,
  formItems: state => state.form.formItems,
  formItemToHandle: state => state.form.formItemToHandle,
  formItem: state => state.form.formItem,
  formItemAttribute: state => state.form.formItemAttribute,

  srcFormCode: state => state.form.srcCode,
  srcTableCode: state => state.table.srcCode,

  pwd: state => state.path.pwd,
  pwd_segments: state => state.path.pwd_segments,
  custom_pwds: state => state.path.custom_pwds
};
export default getters;
