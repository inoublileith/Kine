const db = require('../models')
const Seance = db.seance
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
    Seance.create(req.body).then((data) => {
      return res.send(data)
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying creating Seance: ${error}`)
  }
}
exports.findAllSeancep = async (req, res) => {
  const id = req.params.id
  const data = await sql
    .query(
      `SELECT seances.id as idsea , seances.date ,seances.num, seances.debut , seances.fin , users.nom , users.prenom , users.tel  FROM seances,users WHERE seances.idpat=users.id and seances.idpat=${id}`
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
exports.findbyprise = (req, res) => {
  const id = req.params.id

  Seance.findAll({ where: { idprise: { [Op.eq]: `${id}` } } })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'This prise havent seances.',
      })
    })
}
exports.findAll = (req, res) => {
  const { date } = req.query
  let condition = date ? { date: { [Op.like]: `%${date}%` } } : null
  Seance.findAll({ where: condition })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Seances.',
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id
  Seance.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Seance with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Seance with id=' + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Seance.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Seance was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Seance with id=${id}. Maybe Seance was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Seance with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  Seance.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Seance was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Seance with id=${id}. Maybe Seance was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Seance with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Seance.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Seances were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Seances.',
      })
    })
}
