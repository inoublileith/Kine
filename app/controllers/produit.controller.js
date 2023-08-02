const db = require('../models')
const config = require('../config/auth.config')
const User = db.user
const Produit = db.produit

exports.create = (req, res) => {
  // Save Prduit to Database
  Produit.create({
    nom: req.body.nom,
    description: req.body.description,
    image: req.body.image,
    prix: req.body.prix,
    promoted: req.body.promoted,
    etat: req.body.etat,
    iduser: req.body.iduser,
  })
    .then((produit) => {
     res.send(produit)
    })
    .catch((err) => {
      res.status(500).send({ message: err.message })
    })
}
