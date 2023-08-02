module.exports = (sequelize, DataTypes) => {
  const Kine = sequelize.define('kines', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    region: {
      type: DataTypes.STRING,
    },
    n_assure: {
      type: DataTypes.STRING,
    },
    etat: {
      type: DataTypes.INTEGER,
    },
  })
  return Kine
}
