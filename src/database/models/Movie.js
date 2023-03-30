module.exports = (sequelize, dataTypes) => {

    const alias = "Movie";

    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false,
        },
        rating:{
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false,
        },
        awards:{
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        lenght: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: true,
        },
        genre_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: true,
        },
    }

    const config = {
        tableName: "movies",
        createdAt: "created_at",
        updatedAt: "updated_at"
    } 

    const Model = sequelize.define(alias, cols, config)

    return Model;
}