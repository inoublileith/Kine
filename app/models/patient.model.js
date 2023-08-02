module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('patients', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type_malade: {
      type: DataTypes.STRING,
    },
    qualite: {
      type: DataTypes.STRING,
    },
    n_assure: {
      type: DataTypes.STRING,
    },
    etat: {
      type: DataTypes.INTEGER,
    },
  })
  return Patient
}
