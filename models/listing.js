module.exports = function(sequelize, DataTypes) {

    var Listing = sequelize.define("Listing", {
        companyName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        summary: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        locality: {
          type: DataTypes.STRING,
          allowNull: false
        },
        dateCreated: {
          type: DataTypes.DATE,
          allowNull: false
        }
    });
    return Listing;
};