import http from '../../http-common'
class Panier_PatientDataService {
  getAll() {
    return http.get('/paniers_patients/')
  }
  get(id) {
    return http.get(`/paniers_patients/${id}`)
  }
  create(data) {
    return http.post('/paniers_patients', data)
  }
  update(id, data) {
    return http.put(`/paniers_patients/${id}`, data)
  }
  delete(id) {
    return http.delete(`/paniers_patients/${id}`)
  }
  deleteAll() {
    return http.delete(`/paniers_patients`)
  }
  findByNom(nom) {
    return http.get(`/paniers_patients?nom=${nom}`)
  }
  transition(id, etat) {
    return http.put(`/paniers_patients/transition/${id}/${etat}`)
  }
  panierOuvert(id) {
    return http.get(`/paniers_patients/panier/${id}`)
  }
  getAllLc(id) {
    return http.get(`/paniers_patients/alllc/${id}`)
  }
  getLignes(id) {
    return http.get(`/paniers_patients/getlignes/${id}`)
  }
  livrer(id) {
    return http.put(`/paniers_patients/livrer/${id}`)
  }
  addLc(data) {
    return http.post('/paniers_patients/addlc/', data)
  }
  deleteLc(id) {
    return http.delete(`/paniers_patients/deletelc/${id}`)
  }
  deleteAllLc(idp) {
    return http.delete(`/paniers_patients/deletealllc/${idp}`)
  }
}
export default new Panier_PatientDataService()
