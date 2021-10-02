const pool = require('../../db/index.js');

module.exports = {
  postCharInfo: async (values = []) => {
    const query1 = `INSERT INTO individual_character (level, exp, health, mana, picture, name, attack, defense, speed, initial, color, id_Account) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, (SELECT id from Account WHERE username = $12)) RETURNING id`;


    try {
      const res = await pool.query(query1, values);
      return res;
    } catch(error) {
      console.log(error);
      throw(error);
    }

  },


  postMoves: async (moves, name) => {
    console.log('moves in model', moves);

    try {
      const query = `SELECT id from individual_character WHERE name = '${name}'`;
      const id = await pool.query(query);



      for(var i = 0; i < moves.length; i++) {
        const {moveName, power, cost} = moves[i];
        const query2 = `INSERT INTO moves (id_individual_character, name, description, power, mana_cost)
        VALUES (${id.rows[id.rows.length - 1].id}, '${moveName}', null, ${power}, ${cost});`;

        const res = await pool.query(query2);
        //return res;
      }

      return id;


    } catch(error) {
      console.log(error);
      throw(error);
    }



  },


  getCharInfo: async(values = []) => {
    const query = `SELECT * FROM individual_character WHERE id_Account = (SELECT id from Account where username = $1)`;


    //(SELECT id from Account where username = $1) -> id

    //get the individual_characters info where account is a certain username
    //1. SELECT * FROM individual_character INNER JOIN Account ON individual_character.id_Account = (SELECT Account.id from Account WHERE username = $1);

    //2. SELECT * FROM individual_character INNER JOIN Account ON Account.id = individual_character.Account_id WHERE Account.username = $1;
    const testquery = `SELECT * FROM individual_character
      INNER JOIN Account
      ON Account.id = individual_character.id_Account
      INNER JOIN moves
      ON moves.id_individual_character = individual_character.id
      WHERE Account.username = $1;`;
    /*
    SELECT * FROM individual_character
      INNER JOIN Account
      ON Account.id = individual_character.Account_id
      INNER JOIN moves
      ON moves.id_individual_character = individual_character.id;
      WHERE Account.username = $1;
    */


    try {

      const res = await pool.query(query, values);
      //console.log(res.rows);



      for(var i = 0; i < res.rows.length; i++) {
        const query2 = `SELECT * from moves WHERE ${res.rows[i].id} = id_individual_character`;

        const res2 = await pool.query(query2);
        //console.log(res2.rows);
        // let obj = {};
        // obj.moves = res2.rows;
        res.rows[i].moveSet = res2.rows;
        //add the moves into the character object

      }


      return res;
    } catch(error) {
      console.log(error);
      throw(error);
    }

  },

  editCharInfo : async(values = []) => {

    console.log('values in model', values);
  }


}

