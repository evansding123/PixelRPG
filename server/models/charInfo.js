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
    //need to sort the moves to get the most recent one added


    //this is just initializing troops and persisting the moveset to start out

    //name is name of user - need to change variable name maybe
    try {
      const query = `SELECT id from individual_character WHERE name = '${name}'`;
      const id = await pool.query(query);

      id.rows.sort((a, b) => a.id - b.id);
      console.log(id.rows);

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
        //console.log( res2.rows );
        res.rows[i].moveSet = res2.rows;
        //console.log(res.rows[i]);
        //console.log(res.rows[i].moveSet);
        //add the moves into the character object

      }


      return res;
    } catch(error) {
      console.log(error);
      throw(error);
    }

  },

  editCharInfo : async(username, values = []) => {
   //console.log(values);



    try {
      const query = `SELECT id FROM individual_character WHERE id_Account = (SELECT id from Account WHERE username = '${username}');`;

      const res = await pool.query(query);
      console.log('this is called twice', res.rows);
      for(let i = 0; i < res.rows.length; i++) {
        console.log(values[i],res.rows[i]);
        const query2 =
        `UPDATE individual_character
        SET exp =  ${values[i].exp},
            level = ${values[i].level},
            health = ${values[i].health},
            attack = ${values[i].attack},
            defense = ${values[i].defense}
        WHERE id = ${res.rows[i].id};`;

        const res2 = await pool.query(query2);

      }
      return res;
      // console.log('values in model', values);

    } catch(error) {
      console.log(error);
      throw(error);
    }


    }




}

