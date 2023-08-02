import http from '../http-common'
class ExerciceDataService {
  getAll() {
    return http.get('/exercice/')
  }
  get(id) {
    return http.get(`/exercice/${id}`)
  }
  create(data) {
    return http.post('/exercice', data)
  }
  update(id, data) {
    return http.put(`/exercice/${id}`, data)
  }
  delete(id) {
    return http.delete(`/exercice/${id}`)
  }
  deleteAll() {
    return http.delete(`/exercice`)
  }
  findByNom(titre) {
    return http.get(`/exercices?titre=${titre}`)
  }
  transition(id, etat) {
    return http.put(`/exercice/transition/${id}/${etat}`)
  }
}
export default new ExerciceDataService()
