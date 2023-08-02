const controller = require('../controllers/prise_en_charge.controller')

module.exports = function (app) {
  app.get('/api/prise/:id', controller.findOne)
  app.get('/api/prisee/:id', controller.findAll)
  app.post('/api/prise/', controller.create)
  app.post('/api/prisesea/', controller.createseance)
  app.put('/api/prise/:id', controller.update)
  app.delete('/api/prise/', controller.deleteAll)
  app.delete('/api/prise/:id', controller.delete)
}
