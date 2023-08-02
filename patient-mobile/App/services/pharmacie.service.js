import http from '../http-common'
import authHeader from './auth-header'

const getAll = () => {
  return http.get(`/pharmacies/`, { headers: authHeader() })
}
const get = (id) => {
  return http.get(`/pharmacies/${id}`, { headers: authHeader() })
}
const create = (data) => {
  return http.post(`/pharmacies/`, data, { headers: authHeader() })
}
const update = (id, data) => {
  return http.put(`/pharmacies/${id}`, data, { headers: authHeader() })
}
const deleted = (id) => {
  return http.delete(`/pharmacies/${id}`, { headers: authHeader() })
}
const deleteAll = () => {
  return http.delete(`/pharmacies`, { headers: authHeader() })
}

export default {
  getAll,
  get,
  create,
  update,
  deleted,
  deleteAll,
}
