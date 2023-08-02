import http from '../http-common'
class PatientDataService {
  getAll() {
    return http.get('/patient/')
  }
  getOnepatient(id) {
    return http.get(`/patientuser/${id}`)
  }
  get(id) {
    return http.get(`/patient/${id}`)
  }
  getbyprise(idp) {
    return http.get(`/patient/one/${idp}`)
  }
  create(data) {
    return http.post('/patient', data)
  }
  update(id, data) {
    return http.put(`/patient/${id}`, data)
  }
  delete(id) {
    return http.delete(`/patient/${id}`)
  }
  deleteAll() {
    return http.delete(`/patient`)
  }

}
export default new PatientDataService()
