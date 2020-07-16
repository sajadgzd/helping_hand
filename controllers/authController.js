const db = require("../models");

module.exports = {
    login: function(req, res) {
        db.User
          .find(req.body)
          .then(dbModel => {
              dbModel.map(x => x.password = undefined)
              res.json(dbModel)
          })
          .catch(err => res.status(422).json(err))
    },
    signup: function(req, res) {
        db.User
          .create(req.body)
          .then(dbModel => {
            dbModel.password = undefined
            res.json(dbModel)
          })
          .catch(err => res.status(422).json(err))
    },
    fetch: function(req, res) {
        db.User
          .find({"username": req.params.id})
          .then(dbModel => {
              dbModel.map(x => x.password = undefined)
              res.json(dbModel)
          })
          .catch(err => res.status(422).json(err))
    }
};