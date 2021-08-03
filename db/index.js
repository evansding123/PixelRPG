const { Pool } = require('pg');
const poolKey = require('../config.js');
const pool = new Pool(poolKey);

module.exports = pool;