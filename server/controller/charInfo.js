const models = require('../models/charInfo.js');


module.exports = {
  postCharInfo: async (req, res) => {

    try {

      let array = [];
      for(keys in req.body) {
        array.push(req.body[keys]);
      }
      //console.log('this is body in controller', req.body, array);
      const queryData = await models.postCharInfo(array);
      res.status(201).send(queryData);
    } catch (error) {
      res.status(404).send(error);
    }
  }


}