const models = require('../models/charInfo.js');


module.exports = {
  postCharInfo: async (req, res) => {

    try {

      let array = [];
      for(keys in req.body) {
        array.push(req.body[keys]);
      }
      let moves = array.pop();
      //console.log('this is body in controller', req.body, array);
      const queryData = await models.postCharInfo(array);
      // const moveData = await.moedls.postMoves(moves);
      res.status(201).send(queryData);
    } catch (error) {
      res.status(404).send(error);
    }
  },

  getCharInfo: async (req, res) => {

    try {
      let array = [];
      for(keys in req.query) {
        array.push(req.query[keys]);
      }
      console.log(req.query);

      const queryData = await models.getCharInfo(array);
      res.status(200).send(queryData);

    } catch(error) {
      res.status(404).send(error);
    }

  }


}