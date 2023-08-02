import http from '../http-common'
class PriseDataService {
  getAll() {
    return http.get('/prise/')
  }
  get(id) {
    return http.get(`/prise/${id}`)
  }
  create(data) {
    return http.post('/prise', data)
  }
  createseance(data) {
    return http.post('/prisesea/', data)
  }
  update(id, data) {
    return http.put(`/prise/${id}`, data)
  }
  delete(id) {
    return http.delete(`/prise/${id}`)
  }
  deleteAll() {
    return http.delete(`/prise`)
  }
  findByNom(nom) {
    return http.get(`/prises?nom=${nom}`)
  }
  transition(id, etat) {
    return http.put(`/prise/transition/${id}/${etat}`)
  }
}
export default new PriseDataService()
