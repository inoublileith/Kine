const db = require('../models')
const Traitement = db.traitement
const Op = db.Sequelize.Op

exports.create = async (req, res) => {
  try {
    if (!req.body.type) {
      res.status(400).send({
        message: 'Content can not be empty!',
      })
      return
    }
    Traitement.create(req.body).then((data) => {
      return res.send(data)
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying creating Traitement: ${error}`)
  }
}

exports.findAll = (req, res) => {
 const id = req.params.idsea
  Traitement.findAll({ where: { idsea: { [Op.eq]: id } } })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Traitements.',
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id
  Traitement.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Traitement with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Traitement with id=' + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Traitement.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Traitement was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Traitement with id=${id}. Maybe Traitement was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Traitement with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  Traitement.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Traitement was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Traitement with id=${id}. Maybe Traitement was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Traitement with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Traitement.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Traitements were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Traitements.',
      })
    })
}
