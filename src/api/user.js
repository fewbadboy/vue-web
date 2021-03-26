import request from '@/utils/request'

export function login(data) {
  request({
    url: '/vue-web/user/login',
    method: 'post',
    data
  })
}

export function logout() {
  request({
    url: '/vue-web/user/logout',
    method: 'post'
  })
}
