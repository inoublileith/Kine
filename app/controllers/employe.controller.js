const db = require('../models')
const Employe = db.employe
const Op = db.Sequelize.Op

exports.create = async (req, res) => {
  try {
    if (!req.body.salaire) {
      res.status(400).send({
        message: 'Content can not be empty!',
      })
      return
    }
    Employe.create(req.body).then((data) => {
      return res.send(data)
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying creating Employe: ${error}`)
  }
}

exports.findAll = (req, res) => {
  const id = req.params.id

  Employe.findAll({
    where: { idk: id },
  })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Employes.',
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id
  Employe.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Employe with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Employe with id=' + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Employe.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Employe was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Employe with id=${id}. Maybe Employe was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Employe with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  Employe.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Employe was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Employe with id=${id}. Maybe Employe was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Employe with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Employe.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Employes were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Employes.',
      })
    })
}
