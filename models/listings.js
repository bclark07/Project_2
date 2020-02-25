module.exports = function(sequelize, DataTypes) {
  var Listings = sequelize.define("Listings", {
    company: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    howToApply: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Listings;
};
