const controller = require('../controllers/rend.controller')

module.exports = function (app) {
  app.get('/api/rend/:id', controller.findOne)
  app.get('/api/rend/', controller.findAll)
  app.get('/api/rendk/:id', controller.findAllRend)
  app.get('/api/rendp/:id', controller.findAllRendp)
  app.post('/api/rend/', controller.create)
  app.put('/api/rend/:id/:x', controller.update)
  app.delete('/api/rend/', controller.deleteAll)
  app.delete('/api/rend/:id', controller.delete)
}
