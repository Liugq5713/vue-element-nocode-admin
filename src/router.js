import Vue from 'vue'
import Router from 'vue-router'
import FormEditor from './views/FormEditor'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'form-editor',
      component: FormEditor
    },
    {
      path: '/code-editor',
      name: 'code-editor',
      component: () => import('./views/CodeEditor.vue')
    }
  ]
})
