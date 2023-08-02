module.exports = (sequelize, DataTypes) => {
  const Exercice = sequelize.define('exercices', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
    },
    titre: {
      type: DataTypes.STRING,
    },
    instructions: {
      type: DataTypes.STRING,
    },
    etat: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
    },
  })
  return Exercice
}
