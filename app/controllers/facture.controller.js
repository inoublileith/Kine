const db = require('../models')
const Facture = db.facture
const Op = db.Sequelize.Op

exports.create = async (req, res) => {
  try {
    if (!req.body.prix_unitaire) {
      res.status(400).send({
        message: 'Content can not be empty!',
      })
      return
    }
    Facture.create(req.body).then((data) => {
      return res.send(data)
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying creating Facture: ${error}`)
  }
}

exports.findAll = (req, res) => {
 const id = req.params.id
  Facture.findAll({
    where: { idk: id },
  })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Factures.',
      })
    })
}
exports.findAllNon = (req, res) => {
  Facture.findAll({ where: { idbord: { [Op.eq]: null } } ,})
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Factures.',
      })
    })
}
exports.findbybord = (req, res) => {
  const id =req.params.id

  Facture.findAll({ where: {idbord:{ [Op.eq]: `${id}` }}, 
})
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

exports.findOne = (req, res) => {
  const id = req.params.id
  Facture.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Facture with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Facture with id=' + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Facture.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Facture was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Facture with id=${id}. Maybe Facture was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Facture with id=' + id,
      })
    })
}
exports.supprimer = (req, res) => {
  const id = req.params.id
 
  Facture.update(
    { id: id, idbord: null},
    {
      where: { id: id },
    }
  )
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `Facture was updated successfully.`,
        })
      } else {
        res.send({
          message: `Cannot update Facture with id=${id}. Maybe Facture was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Facture with id=' + id,
      })
    })
}
exports.ajouter = (req, res) => {
  const id = req.params.id
  const x = req.params.x
  Facture.update(
    { id: id, idbord: x },
    {
      where: { id: id },
    }
  )
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `Cannot update Facture with x=${x}. Maybe Facture was not found or req.body is empty!`,
        })
      } else {
        res.send({
          message: `Cannot update Facture with id=${id}. Maybe Facture was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Facture with id=' + id,
      })
    })
}
exports.delete = (req, res) => {
  const id = req.params.id
  Facture.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Facture was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Facture with id=${id}. Maybe Facture was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Facture with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Facture.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Factures were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Factures.',
      })
    })
}
