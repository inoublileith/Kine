module.exports = (sequelize, DataTypes) => {
  const Traitement = sequelize.define('traitements', {
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

    etat: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
    },
    idex1: {
      type: DataTypes.INTEGER,
    },
    idex2: {
      type: DataTypes.INTEGER,
    },
    idex3: {
      type: DataTypes.INTEGER,
    },
    idex4: {
      type: DataTypes.INTEGER,
    },
    idex5: {
      type: DataTypes.INTEGER,
    },
    instructions: {
      type: DataTypes.STRING,
    },
  })
  return Traitement
}
