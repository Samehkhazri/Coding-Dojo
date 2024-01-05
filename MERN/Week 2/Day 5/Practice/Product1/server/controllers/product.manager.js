const  Manager = require("../models/manager.model");

// CRUD
module.exports = {
    // CREATE
    createNewManger: (req, res) => {
        Manager.create(req.body)
            .then((newlyCreatedManager) => {
                res.json(newlyCreatedManager);
                console.log(newlyCreatedManager)
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    // READ ALL
    findAllManagers: (req, res) => {
        Manager.find()
            .then((managers) => {
                res.json(managers);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    // READ ONE
    findSingleManager: (req, res) => {
        Manager.findOne({ _id: req.params.id })
            .then((oneSingleManager) => {
                res.json(oneSingleManager);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    // UPDATE
    updateExistingManager: (req, res) => {
        Manager.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedManager) => {
                res.json(updatedManager);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    // DELETE
    deleteAnExistingManager: (req, res) => {
        Manager.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
            });
    },
};
