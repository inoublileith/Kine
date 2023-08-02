const db = require('../models')
const Kine = db.kine
const User = db.user
const Op = db.Sequelize.Op


exports.create = async (req, res) => {
  try {
    if (!req.body.region) {
      res.status(400).send({
        message: 'Content can not be empty!',
      })
      return
    }
    Kine.create(req.body).then((data) => {
      return res.send(data)
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying creating Kine: ${error}`)
  }
}

exports.findAll = (req, res) => {
  User.findAll({})
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
exports.findAlluser = (req, res) => {
  // const id = User.id
  //   let condition = id ? { id: { [Op.like]: `%${Kine.iduser}%` } } : null
  User.findAll({
    include: [
      {
        model: Kine,
        as: 'Kines',
        required: true,
      },
    ],
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

exports.findOne = (req, res) => {
  const id = 58
  User.findByPk(
    id)
   
    .then((data) => {
    
        res.send(data[nom])
     
     
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Kine with id=' + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Kine.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Kine was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Kine with id=${id}. Maybe Kine was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Kine with id=' + id,
      })
    })
}
exports.updatee = (req, res) => {
  const id = req.params.id
  const x = req.params.x

  Rend.update(
    { id: id, etat: x },
    {
      where: { id: id },
    }
  )
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
  Kine.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Kine was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Kine with id=${id}. Maybe Kine was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Kine with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Kine.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Kines were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Kines.',
      })
    })
}
