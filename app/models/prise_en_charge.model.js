module.exports = (sequelize, DataTypes) => {
  const Prise = sequelize.define('p_e_chs', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    anne: {
      type: DataTypes.STRING,
    },
    n_ordre: {
      type: DataTypes.STRING,
    },
    nb_seance: {
      type: DataTypes.INTEGER,
    },
    d_debut: {
      type: DataTypes.STRING,
    },
    d_fin: {
      type: DataTypes.STRING,
    },
    nb_s_s: {
      type: DataTypes.INTEGER,
    },
    etat: {
      type: DataTypes.INTEGER,
    },
  })
  return Prise
}
