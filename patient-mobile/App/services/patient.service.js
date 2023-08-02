import http from '../http-common'
import authHeader from './auth-header'

const getAll = () => {
  return http.get(`/patients/`, { headers: authHeader() })
}
const get = (id) => {
  return http.get(`/patients/${id}`, { headers: authHeader() })
}
const create = (data) => {
  return http.post(`/patients/`, data, { headers: authHeader() })
}
const update = (id, data) => {
  return http.put(`/patients/${id}`, data, { headers: authHeader() })
}
const deleted = (id) => {
  return http.delete(`/patients/${id}`, { headers: authHeader() })
}
const deleteAll = () => {
  return http.delete(`/patients`, { headers: authHeader() })
}

export default {
  getAll,
  get,
  create,
  update,
  deleted,
  deleteAll,
}
