const db = require("../models");

module.exports = {
  find: function (req, res) {
    query = {}
    if (req.params.id != undefined ){
        query = {"reviewee": req.params.id}}
    else
        query = req.query
    db.Review
      .find(query)
      .sort({date: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  create: async function (req, res) {
    reviewerData = await db.User.find({"username":req.body["reviewer"]}).then(dbModel => dbModel)
    revieweeData = await db.User.find({"username":req.body["reviewee"]}).then(dbModel => dbModel)
    if (reviewerData.length > 0 && revieweeData.length > 0)
      db.Review
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    else {
      res.status(422).json({"errors":"Could not find username(s)"})
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
