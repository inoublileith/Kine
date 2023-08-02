const controller = require('../controllers/seance.controller')

module.exports = function (app) {
  app.get('/api/seance/p/:id', controller.findAllSeancep)
  app.get('/api/seance/:id', controller.findOne)
  app.get('/api/seance/', controller.findAll)
  app.post('/api/seance/', controller.create)
  app.get('/api/seance/one/:id', controller.findbyprise)
  app.put('/api/seance/:id', controller.update)
  app.delete('/api/seance/', controller.deleteAll)
  app.delete('/api/seance/:id', controller.delete)
}
