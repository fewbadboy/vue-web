import router from './router'
// import store from './store'

import Nprogress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style

import { getToken } from '@/utils/auth' // get token from cookie

Nprogress.configure({ showSpinner: true }) // loading spinner, default true

const whiteList = ['/login', '/auth-redirect']

router.beforeEach(async(to, from, next) => {
  // start progress
  Nprogress.start()
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      Nprogress.done()
    } else {
      next()
      Nprogress.done()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      // do not have permission redirected to the login page
      next(`/login?redirect=${to.path}`)
      Nprogress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress
  Nprogress.done()
})

