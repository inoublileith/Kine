const sql = require('./db.js')
// constructor
const Recommandation = function (recommandation) {
  this.titre = recommandation.titre
  this.description = recommandation.description
  this.domaine = recommandation.domaine
  this.specification = recommandation.specification
  this.retenu = recommandation.retenu
  this.etat = recommandation.etat
  this.date_ins = recommandation.date_ins
}
Recommandation.create = (newRecommandation, result) => {
  sql.query(
    'INSERT INTO recommandations SET ?',
    newRecommandation,
    (err, res) => {
      if (err) {
        console.log('error: ', err)
        result(err, null)
        return
      }
      console.log('created recommandation: ', {
        id: res.insertId,
        ...newRecommandation,
      })
      result(null, { id: res.insertId, ...newRecommandation })
    }
  )
}
Recommandation.findById = (id, result) => {
  sql.query(`SELECT * FROM recommandations WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(err, null)
      return
    }
    if (res.length) {
      console.log('found recommandation: ', res[0])
      result(null, res[0])
      return
    }
    // not found recommandation with the id
    result({ kind: 'not_found' }, null)
  })
}
Recommandation.getAll = (titre, result) => {
  let rqt = 'SELECT * FROM recommandations'
  if (titre) {
    rqt += ` WHERE titre LIKE '%${titre}%'`
  }
  sql.query(rqt, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    console.log('recommandations: ', res)
    result(null, res)
  })
}
Recommandation.getAllPublished = (result) => {
  sql.query('SELECT * FROM recommandations WHERE etat=1', (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    console.log('recommandations: ', res)
    result(null, res)
  })
}
Recommandation.updateById = (id, recmmandationValue, result) => {
  sql.query(
    'UPDATE recommandations SET titre = ?, description = ? ,domaine = ? , specification = ?, retenu = ?, etat = ? WHERE id = ?',
    [
      recmmandationValue.titre,
      recmmandationValue.description,
      recmmandationValue.domaine,
      recmmandationValue.specification,
      recmmandationValue.retenu,
      recmmandationValue.etat,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log('error: ', err)
        result(null, err)
        return
      }
      if (res.affectedRows == 0) {
        // not found recommandation with the id
        result({ kind: 'not_found' }, null)
        return
      }
      console.log('updated recommandation: ', { id: id, ...recmmandationValue })
      result(null, { id: id, ...recmmandationValue })
    }
  )
}
Recommandation.remove = (id, result) => {
  sql.query('DELETE FROM recommandations WHERE id = ?', id, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    if (res.affectedRows == 0) {
      // not found recommandation with the id
      result({ kind: 'not_found' }, null)
      return
    }
    console.log('deleted recommandation with id: ', id)
    result(null, res)
  })
}
Recommandation.removeAll = (result) => {
  sql.query('DELETE FROM recommandations', (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    console.log(`deleted ${res.affectedRows} recommandations`)
    result(null, res)
  })
}
module.exports = Recommandation
