const db = require("../models");

module.exports = {
  find: function (req, res) {
    db.Post
      .find(req.query)
      .sort({date: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  create: async function (req, res) {
    userData = await db.User.find({"username":req.body["username"]}).then(dbModel => dbModel)
    if (userData.length > 0)
      db.Post
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    else {
      res.status(422).json({"errors":"No username matches poster name"})
      res.send()
    }
    
  },
  update: function (req, res) {
    console.log(req);
  },
  delete: function (req, res) {
    console.log(req);
  },
};
