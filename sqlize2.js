const express = require ('express');
const app = express();
const cors = require('cors');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const sequelize = new Sequelize({
    database: 'moviesdb',
    username: 'root',
    password: null,
    dialect: 'mysql'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin: 'http://localhost:4200'}));

const UserModel = require('./models/users')(sequelize, Sequelize);
const MovieModel= require ('./models/movie')(sequelize, Sequelize);
MovieModel.Users = MovieModel.belongsTo(UserModel, {foreignKey: 'suggested_by'});


module.exports ={
    app: app,
    Sequelize: Sequelize,
    bodyParser: bodyParser,
    sequelize: sequelize,
    UserModel: UserModel,
    MovieModel: MovieModel,
}