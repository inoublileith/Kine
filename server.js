const express = require('express')
const cors = require('cors')
const app = express()
var corsOptions = {
  origin: '*',
}
app.use(cors(corsOptions))
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// simple route

const db = require('./app/models')
const Role = db.role
// db.sequelize.sync().then(() => {
//   console.log('Resync Db ...')
//   initial()
// })
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and Resync Db')
//   initial()
// })
function initial() {
  Role.create({
    id: 1,
    name: 'admin',
  })

  Role.create({
    id: 2,
    name: 'votant',
  })

  Role.create({
    id: 3,
    name: 'candidat',
  })

  Role.create({
    id: 4,
    name: 'organisateurdevote',
  })

  Role.create({
    id: 5,
    name: 'user',
  })
}

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to INFOESPRIT WORLD.' })
})



const authRouter = require('./app/routes/auth.routes')
authRouter(app)



const recommandationRouter = require('./app/routes/recommandation.routes')
recommandationRouter(app)
const traitementRouter = require('./app/routes/traitement.routes')
traitementRouter(app)
const factureRouter = require('./app/routes/facture.routes')
factureRouter(app)
const employeRouter = require('./app/routes/employe.routes')
employeRouter(app)
const seanceRouter = require('./app/routes/seance.routes')
seanceRouter(app)
const exerciceRouter = require('./app/routes/exercice.routes')
exerciceRouter(app)
const bordRouter = require('./app/routes/bord.routes')
bordRouter(app)
const rendRouter = require('./app/routes/rend.routes')
rendRouter(app)
const priseRouter = require('./app/routes/prise_en_charge.routes')
priseRouter(app)
const patientRouter = require('./app/routes/patient.routes')
patientRouter(app)
const kineRouter = require('./app/routes/kine.routes')
kineRouter(app)
// set port, listen for requests
const PORT = process.env.PORT || 8088
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}.`)
  // initial()
})
