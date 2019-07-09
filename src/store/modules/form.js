const form = {
  state: {
    clickedIndex: -1,
    formAttribute: {},
    formItems: [],
    formItemToHandle: [],
    formItem: {},
    formItemAttribute: {}
  },
  mutations: {
    setFormAttribute(state, formAttribute) {
      state.formAttribute = { ...formAttribute };
    },
    setFormItems(state, formItems) {
      state.formItems = JSON.parse(JSON.stringify(formItems));
    },
    setClickedIndex(state, clickedIndex) {
      state.clickedIndex = clickedIndex;
    },
    setFormItemToHandle(state, formItemToHandle) {
      state.formItemToHandle = { ...formItemToHandle };
    },
    setItemInFormItems(state, newFormItem) {
      const { idx, formItem } = newFormItem;
      state.formItems.splice(idx, 1, formItem);
    }
  }
};

export default form;
