const models = require('../models/charInfo.js');


module.exports = {
  postCharInfo: async (req, res) => {

    try {

      let array = [];
      for(keys in req.body) {
        array.push(req.body[keys]);
      }

      let moves = array.pop();
      let name = req.body.name;
      console.log('this is body in controller', req.body, array, moves, name);

      const queryData = await models.postCharInfo(array);
      const moveData = await models.postMoves(moves, name);
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
      console.log('this is controller', req.query, array);

      const queryData = await models.getCharInfo(array);
      res.status(200).send(queryData);

    } catch(error) {
      res.status(404).send(error);
    }

  },


  editCharInfo : async (req, res) => {

    console.log(req.body);
    try {
      // let array = [];
      // for(const element of req.body) {
      //   array.push(req.query[keys]);
      // }
      //console.log(req.body[1]);

      const queryData = await models.editCharInfo(req.body[0], req.body[1]);
      res.status(200).send(queryData);

    } catch(error) {
      res.status(404).send(error);
    }

  }



}