import qs from 'qs'
import request from '@/utils/request'
import { api } from '@/config'
// api
const { base_api } = api

// 登录
export function login(params) {
  return request({
    url: base_api + '/login',
    method: 'post',
    data: qs.stringify(params)
  })
}