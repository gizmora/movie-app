module.exports = function (db){
    var movie = db.import(__dirname + './movie.js');
    var user = db.import(__dirname + './users.js');

    movie.belongsTo(user, {foreignKey: 'suggested_by'});
    
    return db;
}