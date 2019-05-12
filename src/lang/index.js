import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang导入Element的语言包 英文
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN' // element-ui lang g导入Element的语言包 中文
import enLocale from './en' //导入该项目中用到的英文语言包
import zhLocale from './zh'
Vue.use(VueI18n)
const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale,
    lk: 'asdasd {msg}' //测试
  }
}

const i18n = new VueI18n({
  locale: 'en', // 设置语种
  messages, // 设置全局当地语言包,
  fallbackLocale: 'en',
  numberFormats: {
    //设置 数字本地化
    en: {
      currency: {
        //添加 $
        style: 'currency',
        currency: 'USD'
      }
    },
    zh: {
      currency: {
        //添加 ￥
        style: 'currency',
        currency: 'JPY',
        currencyDisplay: 'symbol'
      }
    }
  },
  dateTimeFormats: {
    //设置 日期时间本地化
    en: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric'
      }
    },
    zh: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric'
      }
    }
  }
})

export default i18n
