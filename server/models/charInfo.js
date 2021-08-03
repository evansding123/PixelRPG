const pool = require('../../db/index.js');

module.exports = {
  postCharInfo: async (values = []) => {
    const query1 = `INSERT INTO individual_character (level, exp, health, mana, picture, name, attack, defense, speed, initial, color) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id`;


    try {
      const res = await pool.query(query1, values);
      console.log(res);
      return res;
    } catch(error) {
      console.log(error);
      throw(error);
    }

  }





}

