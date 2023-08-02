import http from '../http-common'
import authHeader from './auth-header'

const getAll = () => {
  return http.get(`/declarations/`, { headers: authHeader() })
}
const get = (id) => {
  return http.get(`/declarations/${id}`, { headers: authHeader() })
}
const create = (data) => {
  return http.post(`/declarations/`, data, { headers: authHeader() })
}
const update = (id, data) => {
  return http.put(`/declarations/${id}`, data, { headers: authHeader() })
}
const deleted = (id) => {
  return http.delete(`/declarations/${id}`, { headers: authHeader() })
}
const deleteAll = () => {
  return http.delete(`/declarations`, { headers: authHeader() })
}

export default {
  getAll,
  get,
  create,
  update,
  deleted,
  deleteAll,
}
