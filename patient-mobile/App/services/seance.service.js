import http from '../../http-common'

const getAll = () => {
  return http.get(`/seance/`)
}
const get = (id) => {
  return http.get(`/seance/${id}`)
}
const getp = (id) => {
  return http.get(`/seance/p/${id}`)
}
const create = (data) => {
  return http.post(`/seance/`, data)
}
const update = (id, data) => {
  return http.put(`/seance/${id}`, data)
}
const deleted = (id) => {
  return http.delete(`/seance/${id}`)
}
const deleteAll = () => {
  return http.delete(`/seance`)
}

export default {
  getAll,
  get,
  create,
  update,
  deleted,
  deleteAll,
  getp,
}
