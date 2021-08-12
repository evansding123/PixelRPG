const pool = require('../../db/index.js');

module.exports = {
  postAccount: async (values = []) => {
    const query = `INSERT INTO Account (username, password) VALUES ($1, $2)`;
    try {
      const res = await pool.query(query, values);
      return res;
    } catch(error) {
      throw(error);
    }

  }
}