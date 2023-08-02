const db = require('../models')
const Exercice = db.exercice
const Op = db.Sequelize.Op

exports.create = async (req, res) => {
  try {
    if (!req.body.titre) {
      res.status(400).send({
        message: 'Content can not be empty!',
      })
      return
    }
    Exercice.create(req.body).then((data) => {
      return res.send(data)
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying creating Exercice: ${error}`)
  }
}

exports.findAll = (req, res) => {
  const { titre } = req.query
  let condition = titre ? { titre: { [Op.like]: `%${titre}%` } } : null
  Exercice.findAll({ where: condition })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Exercices.',
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id
  Exercice.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Exercice with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Exercice with id=' + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Exercice.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Exercice was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Exercice with id=${id}. Maybe Exercice was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Exercice with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  Exercice.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Exercice was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Exercice with id=${id}. Maybe Exercice was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Exercice with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Exercice.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Exercices were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Exercices.',
      })
    })
}
