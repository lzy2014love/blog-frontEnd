import request from '@/utils/request'

// eslint-disable-next-line import/prefer-default-export
export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params,
  })
}
