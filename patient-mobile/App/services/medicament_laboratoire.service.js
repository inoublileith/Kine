import http from '../../http-common'


const getAll = () => {
  return http.get(`/medicaments_laboratoires/` )
}
const get = (id) => {
  return http.get(`/medicaments_laboratoires/${id}`)
}
const create = (data) => {
  return http.post(`/medicaments_laboratoires/`, data)
}
const update = (id, data) => {
  return http.put(`/medicaments_laboratoires/${id}`, data)
}
const deleted = (id) => {
  return http.delete(`/medicaments_laboratoires/${id}`)
}
const deleteAll = () => {
  return http.delete(`/medicaments_laboratoires`)
}

const verifierOriginalite = (id) => {
  return http.get(`/medicaments_laboratoires/verifier/${id}`)
}

export default {
  getAll,
  get,
  create,
  update,
  deleted,
  deleteAll,
  verifierOriginalite,
}
