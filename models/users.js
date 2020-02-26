const Sequelize = require('sequelize');

module.exports = (sequelize, type) => {
    var User = sequelize.define('users_copy', {
        name:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            validate: {
                isAlpha:{
                    args: true,
                    msg: "Should not contain numbers."
                }
            }
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: {
                    args: true, 
                    msg: "Should be a valid email address."
                }
            }
        }
    }, 
    {
        timestamps: false, 
        freezeTableName: true,
    });    

    return User;
}