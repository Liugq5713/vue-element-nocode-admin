const FormStore = function(table, initialState = {}) {
  if (!table) {
    throw new Error('Table is required.')
  }
  this.table = table

  this.states = {
    clickedIndex: -1,
    formAttribute: {},
    formItems: [],
    formItemToHandle: [],
    formItem: {},
    formItemAttribute: {}
  }
  for (let prop in initialState) {
    if (initialState.hasOwnProperty(prop) && this.states.hasOwnProperty(prop)) {
      this.states[prop] = initialState[prop]
    }
  }
}

FormStore.prototype.commit = function(name, ...args) {
  console.log('name', name)
  const mutations = this.mutations
  if (mutations[name]) {
    mutations[name].apply(this, [this.states].concat(args))
  } else {
    throw new Error(`Action not found: ${name}`)
  }
}
FormStore.prototype.mutations = {
  setFormAttribute(states, formAttribute) {
    this.states = { ...states, formAttribute }
  },
  setFormItems(states, formItems) {
    this.states = { ...states, formItems }
  },
  setClickedIndex(states, clickedIndex) {
    this.states = { ...states, clickedIndex }
  },
  setFormItemToHandle(states, formItemToHandle) {
    this.states = { ...states, formItemToHandle }
  },
  setItemInFormItems(states, idx, formItem) {
    states.formItems.splice(idx, 1, formItem)
  },
  setFromItems(states, formItems) {
    this.states = { ...states, formItems }
  }
}

export default FormStore
