import Vue from 'vue'

import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import enLocale from './en'
import zhLocale from './zh'
import Cookies from 'js-cookie'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
   zh: {
     ...zhLocale,
     ...elementZhLocale
   }
}

export function getLanguage() {
  const language = Cookies.get('language')
  if (language) {
    return language
  }
  // if has not choose language, select browser language 
  const chooseLanguage = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (chooseLanguage.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'en'
}

const i18n = new VueI18n({
  local: getLanguage(),
  messages
})

export default i18n