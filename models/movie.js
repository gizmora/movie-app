const Sequelize = require('sequelize');

module.exports = (sequelize, type) => {
    var Movie = sequelize.define('movie_list_copy', {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            validate: {
                isNumeric: {
                    args: true, 
                    msg: "Should be numeric."
                },
            }
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
            }
        },
        suggested_by:{
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
            }
        },
        synopsis:{
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
            }
        },
        cover_url:{
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isUrl: {
                    args: true, 
                    msg: "Should be a valid URL."
                }
            }
        },
        trailer:{
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isUrl: {
                    args: true, 
                    msg: "Should be a valid URL."
                }
            }
        }
    },
    {
        timestamps: false, 
        freezeTableName: true,
    });

    return Movie;
}