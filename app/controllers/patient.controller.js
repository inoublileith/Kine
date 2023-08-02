const db = require('../models')
const Patient = db.patient
const User = db.user
const Op = db.Sequelize.Op

exports.create = async (req, res) => {
  try {
    if (!req.body.type_malade) {
      res.status(400).send({
        message: 'Content can not be empty!',
      })
      return
    }
    Patient.create(req.body).then((data) => {
      return res.send(data)
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying creating Patient: ${error}`)
  }
}
exports.findAlluser = (req, res) => {
  // const id = User.id
  //   let condition = id ? { id: { [Op.like]: `%${Kine.iduser}%` } } : null
  const id = req.params.idp
  User.findAll({
    include: [
      {
        model: Patient,
        as: 'Patient',
        required: true,
      },
    ],
    where: { id: id },
  })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Users.',
      })
    })
}
exports.findAll = (req, res) => {
  Patient.findAll({})
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Patients.',
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.idp
  Patient.findAll({ where: { iduser: { [Op.eq]: `${id}` } } })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'This bordoureau havent factures.',
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Patient.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Patient was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Patient with id=${id}. Maybe Patient was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Patient with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  Patient.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Patient was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Patient with id=${id}. Maybe Patient was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Patient with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Patient.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Patients were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Patients.',
      })
    })
}
