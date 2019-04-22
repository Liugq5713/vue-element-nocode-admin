export default {
  state: {
    form: {
      value: ''
    },
    formItems: []
  },
  getForm() {
    return this.form
  },
  getFormItem() {
    return this.state.formItems
  }
}
