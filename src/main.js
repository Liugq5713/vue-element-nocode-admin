import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI)

const requireComponent = require.context(
  './components/FormItem/',
  false,
  /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, '')
  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
