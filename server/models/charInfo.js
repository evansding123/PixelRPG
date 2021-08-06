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

    try {

      const res = await pool.query(query, values);
      return res;
    } catch(error) {
      console.log(error);
      throw(error);
    }

  }





}

