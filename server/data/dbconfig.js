const knex = require('knex');
const knexfile = require('../knexfile');
const config = process.env.DB_CONFIG || knexfile.development;

module.exports = knex(config);
