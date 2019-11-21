import request from '@/utils/request'

// login
export function login(params) {
  return request({
    url: '/login',
    method: 'post',
    params
  })
}