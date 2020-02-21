module.exports = function(sequelize, DataTypes) {

    var Search = sequelize.define("Search", {
        // The email cannot be null, and must be a proper email before creation
        keyword: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // The password cannot be null
        city: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Search;
};