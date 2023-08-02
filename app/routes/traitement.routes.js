const controller = require('../controllers/traitement.controller')

module.exports = function (app) {
  app.get('/api/traitement/:idsea', controller.findAll)
  app.post('/api/traitement/', controller.create)
  app.put('/api/traitement/:id', controller.update)
  app.delete('/api/traitement/', controller.deleteAll)
  app.delete('/api/traitement/:id', controller.delete)
}
