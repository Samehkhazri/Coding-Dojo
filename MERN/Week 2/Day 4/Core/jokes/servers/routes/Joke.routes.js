const JokeController = require("../controllers/joke.countroller");

module.exports=app=>{
    app.get("/api/jokes",JokeController.findAllJokes);
    app.get("/api/country/:id",JokeController.findSingleJoke);
    app.post("/api/country/new",JokeController.createNewJoke);
    app.put("/api/country/update/:id",JokeController.updateExistingJoke);
    app.delete("/api/country/delete/:id",JokeController.deleteAnExistingJoke);

};