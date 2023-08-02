import http from '../http-common'
class ProduitDataService {
  create(data, onUploadProgress) {
    let formData = new FormData()
    formData.append('nom', data.nom)
    formData.append('description', data.description)
    formData.append('prix', data.prix)
    formData.append('image', data.image)
    formData.append('promoted', data.promoted)
    formData.append('etat', data.etat)
    formData.append('iduser', data.iduser)
    return http.post('/produits', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress,
    })
  }

  getAll() {
    return http.get('/produits/')
  }
  get(id) {
    return http.get(`/produits/${id}`)
  }

  update(id, data) {
    return http.put(`/produits/${id}`, data)
  }
  delete(id) {
    return http.delete(`/produits/${id}`)
  }
  deleteAll() {
    return http.delete(`/produits`)
  }
  findByNom(nom) {
    return http.get(`/produits?nom=${nom}`)
  }
}
export default new ProduitDataService()
