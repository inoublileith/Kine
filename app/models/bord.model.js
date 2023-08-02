module.exports = (sequelize, DataTypes) => {
  const Bord = sequelize.define('bords', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    total: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.STRING,
    },
     etat: {
      type: DataTypes.INTEGER,
    },
  })
  return Bord
}
