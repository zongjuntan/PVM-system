import request from '@/utils/request'

// 查询岗位列表
export function getApplicationList(query) {
  return request({
    url: '/reservation/exit/list',
    method: 'get',
    params: query
  })
}

// 审核
export function audit(data) {
  return request({
    url: 'reservation/examine',
    method: 'post',
    data: data
  })
}

// 查询入园公司审核列表
export function queryEntranceExitandExamine(query) {
  return request({
    url: '/reservation/exit/queryEntranceExitandExamine',
    method: 'get',
    params: query
  })
}

// 查询岗位详细
export function getPost(postId) {
  return request({
    url: '/system/post/' + postId,
    method: 'get'
  })
}

// 新增岗位
export function addPost(data) {
  return request({
    url: '/system/post',
    method: 'post',
    data: data
  })
}

// 修改岗位
export function updatePost(data) {
  return request({
    url: '/system/post',
    method: 'put',
    data: data
  })
}

// 删除岗位
export function delPost(postId) {
  return request({
    url: '/system/post/' + postId,
    method: 'delete'
  })
}
