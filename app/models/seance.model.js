module.exports = (sequelize, DataTypes) => {
  const Seance = sequelize.define('seances', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.STRING,
    },
    debut: {
      type: DataTypes.STRING,
    },
    fin: {
      type: DataTypes.STRING,
    },
    etat: {
      type: DataTypes.INTEGER,
    },
  })
  return Seance
}
