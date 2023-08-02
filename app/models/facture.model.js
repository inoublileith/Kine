module.exports = (sequelize, DataTypes) => {
  const Facture = sequelize.define('factures', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    prix_unitaire: {
      type: DataTypes.INTEGER,
    },
    prix_ht: {
      type: DataTypes.INTEGER,
    },
    TVA: {
      type: DataTypes.INTEGER,
    },
    m_tva: {
      type: DataTypes.INTEGER,
    },
    prix_TTC: {
      type: DataTypes.INTEGER,
    },
  })
  return Facture
}
