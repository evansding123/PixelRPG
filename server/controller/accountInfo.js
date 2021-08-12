const models = require('../models/accountInfo.js');


module.exports = {
  postAccount: async (req, res) => {

    try {

      let array = [];
      console.log(req.body);

      for(keys in req.body) {
        array.push(req.body[keys]);
      }

      const queryData = await models.postAccount(array);
      res.status(201).send(queryData);

    } catch(error) {
      res.status(404).send(error);
    }

  }
}

