import http from '../http-common'
class EmployeDataService {
  getAll(id) {
    return http.get(`/employee/${id}`)
  }
  get(id) {
    return http.get(`/employe/${id}`)
  }
  create(data) {
    return http.post('/employe', data)
  }
  update(id, data) {
    return http.put(`/employe/${id}`, data)
  }
  delete(id) {
    return http.delete(`/employe/${id}`)
  }
  deleteAll() {
    return http.delete(`/employe`)
  }
  findByNom(nom) {
    return http.get(`/employes?nom=${nom}`)
  }
  transition(id, etat) {
    return http.put(`/employe/transition/${id}/${etat}`)
  }
}
export default new EmployeDataService()
