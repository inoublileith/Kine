const controller = require('../controllers/bord.controller')

module.exports = function (app) {
  app.get('/api/bord/:id', controller.findOne)
  app.get('/api/bordd/:id', controller.findAll)
  app.post('/api/bord/', controller.create)
  app.put('/api/bord/:id', controller.update)
  app.delete('/api/bord/', controller.deleteAll)
  app.delete('/api/bord/:id', controller.delete)
}
