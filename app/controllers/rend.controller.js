const { sequelize } = require('../models')
const db = require('../models')
const Rend = db.rend
const Op = db.Sequelize.Op
const sql = db.sequelize

exports.create = async (req, res) => {
  try {
    if (!req.body.date) {
      res.status(400).send({
        message: 'Content can not be empty!',
      })
      return
    }
    Rend.create(req.body).then((data) => {
      return res.send(data)
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying creating Rendv: ${error}`)
  }
}
exports.findAllRend = (req, res) => {
  const id = req.params.id
  Rend.findAll({ where: { idk: { [Op.eq]: `${id}` } } })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Rendez_vous.',
      })
    })
}
// exports.findAllRendp = (req, res) => {
//   const id = req.params.id
//   Rend.findAll({ where: { idp: { [Op.eq]: `${id}` } } })
//     .then((data) => {
//       console.log(data)
//       res.send(data)
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || 'Some error occurred while retrieving Rendez_vous.',
//       })
//     })
// }
exports.findAllRendp = async (req, res) => {
  const id = req.params.id
  const data = await sql 
    .query(
      `SELECT rends.id as idrend , rends.heure , rends.date , rends.etat , users.nom , users.prenom , users.tel  FROM rends,users WHERE rends.idk=users.id and rends.idp=${id}`
    )
    .then((data) => {
      console.log('data : ', data[0])
      res.send(data[0])
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Candidatures.',
      })
    })
   }
exports.findAll = (req, res) => {
 
 
  Rend.findAll({ })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Rendez_vous.',
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id
  Rend.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Rendez_vous with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Rendez_vous with id=' + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  const x = req.params.x
  console.log(id)
  console.log(x)
  Rend.update( { id: id, etat: x },{
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Rendez_vous was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Rendez_vous with id=${id}. Maybe Rendez_vous was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Rendez_vous with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  Rend.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Rendez_vous was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Rendez_vous with id=${id}. Maybe Rendez_vous was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Rendez_vous with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Rend.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Rendez_vous were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Rendez_vous.',
      })
    })
}
