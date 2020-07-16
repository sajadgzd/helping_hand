const db = require("../models");

module.exports = {
  find: function (req, res) {
    query = req.query
    query["users"] = {"$all":query["users"]}
    db.Message
      .find(query)
      .sort({createdAt: 1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  send: async function (req, res) {
    // is sender in groupchat
    // is groupchat valid
    sender = req.params.id;
    users = req.body["users"];
    if (!users.includes(sender)) {
        res.status(422).json({"errors":"User not in groupchat"})
        res.send()
        return
    }

    for (i = 0; i < users.length; i++) {
        
        userData = await db.User.find({"username":users[i]}).then(dbModel => dbModel)
        if (userData.length <= 0) {
            res.status(422).json({"errors":"Could not find username(s)"})
            res.send()
            return
        }

    }
    req.body["sender"] = sender;
    db.Message
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
    
  },
};
