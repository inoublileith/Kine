const controller = require('../controllers/employe.controller')

module.exports = function (app) {
  app.get('/api/employe/:id', controller.findOne)
  app.get('/api/employee/:id', controller.findAll)
  app.post('/api/employe/', controller.create)
  app.put('/api/employe/:id', controller.update)
  app.delete('/api/employe/', controller.deleteAll)
  app.delete('/api/employe/:id', controller.delete)

}

