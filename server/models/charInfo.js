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

