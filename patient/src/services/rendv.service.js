import http from '../http-common'
class RendDataService {
  getAll() {
    return http.get('/rend/')
  }
  getAllRend(id) {
    return http.get(`/rendk/${id}`)
  }
  getAllRendp(id) {
    return http.get(`/rendp/${id}`)
  }
  get(id) {
    return http.get(`/rend/${id}`)
  }
  create(data) {
    return http.post('/rend', data)
  }
  update(id, x) {
    return http.put(`/rend/${id}/${x}`)
  }
  delete(id) {
    return http.delete(`/rend/${id}`)
  }
  deleteAll() {
    return http.delete(`/rend`)
  }
  findByNom(nom) {
    return http.get(`/rends?nom=${nom}`)
  }
  transition(id, etat) {
    return http.put(`/rend/transition/${id}/${etat}`)
  }
}
export default new RendDataService()
