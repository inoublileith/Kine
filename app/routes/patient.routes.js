const controller = require('../controllers/patient.controller')

module.exports = function (app) {
  app.get('/api/patient/:idp', controller.findOne)
  app.get('/api/patient/', controller.findAll)
   app.get('/api/patientuser/:idp', controller.findAlluser)
  app.post('/api/patient/', controller.create)
  app.put('/api/patient/:id', controller.update)
  app.delete('/api/patient/', controller.deleteAll)
  app.delete('/api/patient/:id', controller.delete)
}
