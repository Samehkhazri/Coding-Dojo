const { Joke } = require("../models/joke.model");

// CRUD
module.exports = {
    // CREATE
    createNewJoke: (req, res) => {
        Joke.create(req.body)
            .then((newlyCreatedJoke) => {
                res.json(newlyCreatedJoke);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    // READ ALL
    findAllJokes: (req, res) => {
        Joke.find({})
            .then((jokes) => {
                res.json(jokes);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    // READ ONE
    findSingleJoke: (req, res) => {
        Joke.findOne({ _id: req.params.id })
            .then((oneSingleJoke) => {
                res.json(oneSingleJoke);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    // UPDATE
    updateExistingJoke: (req, res) => {
        Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedJoke) => {
                res.json(updatedJoke);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    // DELETE
    deleteAnExistingJoke: (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
            });
    },
};
