import http from '../../http-common'

const getAll = () => {
  return http.get(`/rend/`)
}
const get = (id) => {
  return http.get(`/rend/${id}`)
}

 const  getAllRendp = (id) => {
    return http.get(`/rendp/${id}`)
  }
const create = (data) => {
  return http.post(`/rend/`, data)
}
const update = (id, data) => {
  return http.put(`/rend/${id}`, data)
}
const deleted = (id) => {
  return http.delete(`/rend/${id}`)
}
const deleteAll = () => {
  return http.delete(`/rend`)
}



export default {
  getAll,
  get,
  create,
  update,
  deleted,
  deleteAll,
  getAllRendp,
}
