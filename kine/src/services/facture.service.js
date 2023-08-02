import http from '../http-common'
class FactureDataService {
  getAll() {
    return http.get('/facture/')
  }
  getAllNon() {
    return http.get('/factureNon/')
  }
  get(id) {
    return http.get(`/facture/${id}`)
  }
  getbybord(id) {
    return http.get(`/facture/one/${id}`)
  }
  create(data) {
    return http.post('/facture', data)
  }
  update(id, data) {
    return http.put(`/facture/${id}`, data)
  }
  ajouter(id, x) {
    return http.put(`/facture/non/${id}/${x}`)
  }
  deletefrom(id) {
    return http.put(`/facture/non/${id}`)
  }
  delete(id) {
    return http.delete(`/facture/${id}`)
  }
  deleteAll() {
    return http.delete(`/facture`)
  }
  findByNom(titre) {
    return http.get(`/factures?titre=${titre}`)
  }
  transition(id, etat) {
    return http.put(`/facture/transition/${id}/${etat}`)
  }
}
export default new FactureDataService()
