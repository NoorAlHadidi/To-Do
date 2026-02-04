import knex from 'knex';
import knexfile from './knexfile.js';

const database = knex(knexfile.development);

export default database;