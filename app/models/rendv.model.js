module.exports = (sequelize, DataTypes) => {
  const Rend = sequelize.define('rends', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    heure: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.STRING,
    },
    etat: {
      type: DataTypes.INTEGER,
    },
    idk: {
      type: DataTypes.INTEGER,
    },
  })
  return Rend
}
