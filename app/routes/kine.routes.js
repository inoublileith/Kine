const controller = require('../controllers/Kine.controller')

module.exports = function (app) {
  app.get('/api/Kine/:id', controller.findOne)
  app.get('/api/user/', controller.findAll)
  app.get('/api/users/', controller.findAlluser)
  
  app.post('/api/Kine/', controller.create)
  app.put('/api/kine/:id/:x', controller.updatee)
  app.put('/api/Kine/:id', controller.update)
  app.delete('/api/Kine/', controller.deleteAll)
  app.delete('/api/Kine/:id', controller.delete)
}
