const controller = require('../controllers/facture.controller')

module.exports = function (app) {
  app.get('/api/facture/:id', controller.findOne)
  app.get('/api/facturee/:id', controller.findAll)
  app.get('/api/facture/one/:id', controller.findbybord)
  app.get('/api/factureNon/', controller.findAllNon)
  app.post('/api/facture/', controller.create)
  app.put('/api/facture/:id', controller.update)
  app.put('/api/facture/non/:id/:x', controller.ajouter)
  app.put('/api/facture/non/:id', controller.supprimer)
  app.delete('/api/facture/', controller.deleteAll)
  app.delete('/api/facture/:id', controller.delete)
}
