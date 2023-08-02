const db = require('../models')
const Prise = db.prise
const Seance = db.seance
const Op = db.Sequelize.Op


exports.createseance = async (req, res) => {
for (let i = 0; i < req.body.nb_seance; i++) {
  const data = {
    id: null,
    date: '',
    debut: '',
    fin: '',
    etat: 0,
    idpat: req.body.idpat,
    idprise: req.body.id,
    idk: req.body.idk,
  }
  Seance.create(data).then(() => {
    return console.log('creation avec success')
  })
}}


exports.create = async (req, res) => {
  try {
    if (!req.body.anne) {
      res.status(400).send({
        message: 'Content can not be empty!',
      })
      return
    }
    Prise.create(req.body).then((data) => {
      return res.send(data)
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying creating Prise en charge: ${error}`)
  }
  }

exports.findAll = (req, res) => {
 const id = req.params.id
  Prise.findAll({
    where: { idk: id },
  })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while retrieving Prise en charge.',
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id
  Prise.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Prise en charge with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Prise en charge with id=' + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Prise.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Prise was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Prise with id=${id}. Maybe Prise was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Prise with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  Prise.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Prise en charge was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Prise en charge with id=${id}. Maybe Prise en charge was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Prise en charge with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Prise.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Prise en charge were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all Prise en charge.',
      })
    })
}
