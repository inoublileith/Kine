import http from '../http-common'
class SeanceDataService {
  getAll() {
    return http.get('/seance/')
  }
  get(id) {
    return http.get(`/seance/${id}`)
  }
  getp(id) {
    return http.get(`/seance/p/${id}`)
  }
  getbyprise(id) {
    return http.get(`/seance/one/${id}`)
  }
  create(data) {
    return http.post('/seance', data)
  }
  update(id, data) {
    return http.put(`/seance/${id}`, data)
  }
  delete(id) {
    return http.delete(`/seance/${id}`)
  }
  deleteAll() {
    return http.delete(`/seance`)
  }
  findByNom(nom) {
    return http.get(`/seances?nom=${nom}`)
  }
  transition(id, etat) {
    return http.put(`/seance/transition/${id}/${etat}`)
  }
}
export default new SeanceDataService()
