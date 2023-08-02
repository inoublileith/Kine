module.exports = (sequelize, DataTypes) => {
  const Employe = sequelize.define('employes', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    salaire: {
      type: DataTypes.INTEGER,
    },
    tache: {
      type: DataTypes.STRING,
    },
    nom: {
      type: DataTypes.STRING,
    },
    prenom: {
      type: DataTypes.STRING,
    },
    adresse: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    etat: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
    },
  
  })
  return Employe
}
