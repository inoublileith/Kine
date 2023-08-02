import http from '../http-common'
import authHeader from './auth-header'

const getAll = () => {
  return http.get(`/categories/`, { headers: authHeader() })
}
const get = (id) => {
  return http.get(`/categories/${id}`, { headers: authHeader() })
}
const create = (data) => {
  return http.post(`/categories/`, data, { headers: authHeader() })
}
const update = (id, data) => {
  return http.put(`/categories/${id}`, data, { headers: authHeader() })
}
const deleted = (id) => {
  return http.delete(`/categories/${id}`, { headers: authHeader() })
}
const deleteAll = () => {
  return http.delete(`/categories`, { headers: authHeader() })
}

export default {
  getAll,
  get,
  create,
  update,
  deleted,
  deleteAll,
}
