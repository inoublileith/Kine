const controller = require('../controllers/exercice.controller')

module.exports = function (app) {
  app.get('/api/exercice/:id', controller.findOne)
  app.get('/api/exercice/', controller.findAll)
  app.post('/api/exercice/', controller.create)
  app.put('/api/exercice/:id', controller.update)
  app.delete('/api/exercice/', controller.deleteAll)
  app.delete('/api/exercice/:id', controller.delete)
}
