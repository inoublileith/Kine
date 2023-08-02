import http from '../http-common'
class KineDataService {
  getAll() {
    return http.get('/user/')
  }
  getAllkine() {
    return http.get('/users/')
  }
  get(id) {
    return http.get(`/kine/${id}`)
  }
  getbyprise(id) {
    return http.get(`/kine/one/${id}`)
  }
  create(data) {
    return http.post('/kine', data)
  }
  update(id, data) {
    return http.put(`/kine/${id}`, data)
  }
  updatee(id, x) {
    return http.put(`/kine/${id}/${x}`)
  }
  delete(id) {
    return http.delete(`/kine/${id}`)
  }
  deleteAll() {
    return http.delete(`/kine`)
  }
  findByNom(nom) {
    return http.get(`/kines?nom=${nom}`)
  }
  transition(id, etat) {
    return http.put(`/kine/transition/${id}/${etat}`)
  }
}
export default new KineDataService()
