const db = require('../models')
const Bord = db.bord
const Op = db.Sequelize.Op

exports.create = async (req, res) => {
  try {
    if (!req.body.date) {
      res.status(400).send({
        message: 'Content can not be empty!',
      })
      return
    }
    Bord.create(req.body).then((data) => {
      return res.send(data)
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying creating Bord: ${error}`)
  }
}

exports.findAll = (req, res) => {
  const id = req.params.id

  Bord.findAll({
    where: { idk: id },
  })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Bordoureaus.',
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id
  Bord.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Bord with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Bord with id=' + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Bord.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Bord was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Bord with id=${id}. Maybe Bord was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Bord with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  Bord.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Bord was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Bord with id=${id}. Maybe Bord was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Bord with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Bord.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Bords were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all Bords.',
      })
    })
}
