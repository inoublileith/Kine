const config = require('../config/db.config.js')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
})
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.user = require('./user.model.js')(sequelize, Sequelize)
db.role = require('../models/role.model.js')(sequelize, Sequelize)
db.traitement = require('./traitement.model.js')(sequelize, Sequelize)
db.prise = require('./prise_en_charge.model.js')(sequelize, Sequelize)
db.bord = require('./bord.model.js')(sequelize, Sequelize)
db.employe = require('./employe.model.js')(sequelize, Sequelize)
db.seance = require('./seance.model.js')(sequelize, Sequelize)
db.exercice = require('./exercice.model.js')(sequelize, Sequelize)
db.facture = require('./facture.model.js')(sequelize, Sequelize)
db.rend = require('./rendv.model.js')(sequelize, Sequelize)
db.patient = require('./patient.model.js')(sequelize, Sequelize)
db.kine = require('./kine.model.js')(sequelize, Sequelize)
db.refreshToken = require('../models/refreshToken.model.js')(
  sequelize,
  Sequelize
)

db.role.belongsToMany(db.user, {
  through: 'user_roles',
  foreignKey: 'roleId',
  otherKey: 'userId',
})


db.user.belongsToMany(db.role, {
  through: 'user_roles',
  foreignKey: 'userId',
  otherKey: 'roleId',
})
db.bord.hasMany(db.facture, {
as: 'Facture',
foreignKey: 'idbord'
})
db.facture.belongsTo(db.bord, { foreignKey: 'idbord' })

db.user.hasMany(db.employe, {
  as: 'employe',
  foreignKey: 'idk',
})
db.employe.belongsTo(db.user, { foreignKey: 'idk' })

db.user.hasMany(db.seance, {
  as: 'seance',
  foreignKey: 'idk',
})
db.seance.belongsTo(db.user, { foreignKey: 'idk' })

db.user.hasMany(db.bord, {
  as: 'bord',
  foreignKey: 'idk',
})
db.bord.belongsTo(db.user, { foreignKey: 'idk' })

db.user.hasMany(db.prise, {
  as: 'prise',
  foreignKey: 'idk',
})
db.prise.belongsTo(db.user, { foreignKey: 'idk' })

db.user.hasMany(db.facture, {
  as: 'facture',
  foreignKey: 'idk',
})
db.facture.belongsTo(db.user, { foreignKey: 'idk' })

db.user.hasMany(db.patient, {
  as: 'Patient',
  foreignKey: 'iduser',
})
db.patient.belongsTo(db.user, { foreignKey: 'iduser' })
db.user.hasMany(db.seance, {
  as: 'Patients',
  foreignKey: 'idpat',
})
db.seance.belongsTo(db.user, { foreignKey: 'idpat' })
db.user.hasMany(db.kine, {
  as: 'Kines',
  foreignKey: 'iduser',
})
db.kine.belongsTo(db.user, { foreignKey: 'iduser' })

db.user.hasMany(db.rend, {
  as: 'rend',
  foreignKey: 'idp',
})
db.rend.belongsTo(db.user, { foreignKey: 'idp' })

db.facture.hasMany(db.prise, {
  as: 'facture',
  foreignKey: 'idfac',
})
db.prise.belongsTo(db.facture, { foreignKey: 'idfac' })
db.rend.hasMany(db.prise, {
  as: 'rend',
  foreignKey: 'idrend',
})
db.prise.belongsTo(db.rend, { foreignKey: 'idfac' })

db.user.hasMany(db.prise, {
  as: 'patients',
  foreignKey: 'idpat',
})
db.prise.belongsTo(db.user, { foreignKey: 'idpat' })



db.prise.hasMany(db.seance, {
  as: 'Prise',
  foreignKey: 'idprise',
})
db.seance.belongsTo(db.prise, { foreignKey: 'idprise' })


db.seance.hasMany(db.traitement, {
  as: 'Seance',
  foreignKey: 'idsea',
})
db.traitement.belongsTo(db.seance, { foreignKey: 'idsea' })
{/*db.ROLES = [
  'user',
  'admin',
  'votant',
  'candidat',
  'organisateurdevote',
]*/}
//Sequelize hasOne Join association 1user ------avoir------- 1Token
//db.user.hasOne(db.refreshToken, {
// foreignKey: 'userId',
//targetKey: 'id',

//})
//db.refreshToken.belongsTo(db.user, {
// foreignKey: 'userId',
// targetKey: 'id',
//})
//Sequelize hasMany Join association 1user ------avoir------- *produit

//db.user.hasMany(db.produit, {
// as: 'Product',
//foreignKey: 'iduser'
//})
//db.produit.belongsTo(db.user, { foreignKey: 'iduser' })

module.exports = db

/*
After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them:

create a new User: create(object)
find a User by id: findByPk(id)
find a User by email: findOne({ where: { email: ... } })
get all Users: findAll()
find all Users by username: findAll({ where: { username: ... } })
*/

