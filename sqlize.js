
const { app, MovieModel, UserModel } = require('./sqlize2');

app.get('/movies', async (req, res) => {
    const movies = await MovieModel.findAll({
        include: [{
            model: UserModel,
            required: true
        }]
    });
    res.send(movies);

})

app.post('/movies', async (req, res)=>{

    try{
        const search = await UserModel.findAll({
            where: {
                name: req.body.suggested_by,
            }
        });
        if(search.length === 0){
            console.log("search is null");
            const newUser = await UserModel.create({
                name: req.body.suggested_by,
                email: req.body.email,
            });
        }
        const newMovie = await MovieModel.create(req.body, {include:{association: MovieModel.Users}});
    } catch(error){
        console.log(error);
    }
    
})

const server = app.listen(8081, ()=>{
    let host = server.address().address;
    let port = server.address().port;

    console.log("App listening at http://%s:%s", host, port);
})
