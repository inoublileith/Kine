import http from '../../http-common'

const getAll = () => {
    return http.get('/pharmacies/')
  }
const get = (id) => {
    return http.get(`/pharmacies/${id}`)
  }
const create = (data) => {
    return http.post('/pharmacies', data)
  }
const update = (id, data) => {
    return http.put(`/pharmacies/${id}`, data)
  }
const remove = (id) => {
    return http.delete(`/pharmacies/${id}`)
  }
const removeAll = () => {
    return http.delete(`/pharmacies`)
  }
const findByTitre = (titre) => {
    return http.get(`/pharmacies?titre=${titre}`)
  }
export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitre
}