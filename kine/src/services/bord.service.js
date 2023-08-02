import http from '../http-common'
class BordDataService {
  getAll(id) {
    return http.get(`/bordd/${id}`)
  }
  get(id) {
    return http.get(`/bord/${id}`)
  }

  create(data) {
    return http.post('/bord', data)
  }
  update(id, data) {
    return http.put(`/bord/${id}`, data)
  }
  delete(id) {
    return http.delete(`/bord/${id}`)
  }
  deleteAll() {
    return http.delete(`/bord`)
  }
  findByNom(nom) {
    return http.get(`/bords?nom=${nom}`)
  }
  transition(id, etat) {
    return http.put(`/bord/transition/${id}/${etat}`)
  }
}
export default new BordDataService()
