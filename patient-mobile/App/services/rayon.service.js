import http from '../http-common'
import authHeader from './auth-header'

const getAll = () => {
  return http.get(`/rayons/`, { headers: authHeader() })
}
const get = (id) => {
  return http.get(`/rayons/${id}`, { headers: authHeader() })
}
const create = (data) => {
  return http.post(`/rayons/`, data, { headers: authHeader() })
}
const update = (id, data) => {
  return http.put(`/rayons/${id}`, data, { headers: authHeader() })
}
const deleted = (id) => {
  return http.delete(`/rayons/${id}`, { headers: authHeader() })
}
const deleteAll = () => {
  return http.delete(`/rayons`, { headers: authHeader() })
}

export default {
  getAll,
  get,
  create,
  update,
  deleted,
  deleteAll,
}
