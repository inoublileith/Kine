import http from '../http-common'
class TraitementDataService {
  getAll(idsea) {
    return http.get(`/traitement/${idsea}`)
  }
   create(data) {
    return http.post('/traitement', data)
  }
  update(id, data) {
    return http.put(`/traitement/${id}`, data)
  }
  delete(id) {
    return http.delete(`/traitement/${id}`)
  }
  deleteAll() {
    return http.delete(`/traitement`)
  }
  findByNom(titre) {
    return http.get(`/traitements?titre=${titre}`)
  }
  transition(id, etat) {
    return http.put(`/traitement/transition/${id}/${etat}`)
  }
}
export default new TraitementDataService()
