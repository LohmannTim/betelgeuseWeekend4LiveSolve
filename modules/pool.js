var pg = require( 'pg' );

var config = {
  port: 5432,
  database: 'betelgeuse',
  host: 'localhost',
  max: 27,
  idleTimeOutMillis: 19500
}; // end config

var pool = pg.Pool( config );

module.exports = pool;
