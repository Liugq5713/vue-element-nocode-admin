const form = {
  state: {
    clickedIndex: -1,
    formAttribute: {},
    formItems: [],
    formItemToHandle: {},
    formItem: {},
    formItemAttribute: {},
    srcCode: ""
  },
  mutations: {
    SET_FORM_ATTRIBUTE(state, formAttribute) {
      state.formAttribute = { ...formAttribute };
    },
    SET_FORMITEMS(state, formItems) {
      state.formItems = formItems;
    },
    SET_CLICKED_INDEX(state, clickedIndex) {
      state.clickedIndex = clickedIndex;
    },
    SET_FORMITEM_HANDLE(state, formItemToHandle) {
      state.formItemToHandle = { ...formItemToHandle };
    },
    ADD_FORMITEM_OF_ITEMS(state, newFormItem) {
      state.formItems.push(newFormItem);
      state.formItemToHandle = {
        type: "click",
        idx: state.formItems.length - 1,
        element: newFormItem
      };
      state.clickedIndex = state.formItems.length - 1;
    },
    UPDATE_FORMITEM_OF_ITEMS(state, newFormItem) {
      const { idx, formItem } = newFormItem;
      state.formItems.splice(idx, 1, formItem);
    },
    SET_SRC_FORM_CODE(state, srcCode) {
      state.srcCode = srcCode;
    },
    DELETE_FORM_ITEM(state, clickedIndex) {
      state.formItems.splice(clickedIndex, 1);
    }
  }
};

export default form;
