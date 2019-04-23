import Vue from 'vue'
import App from './App.vue'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$store = store
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
  render: h => h(App)
}).$mount('#app')
