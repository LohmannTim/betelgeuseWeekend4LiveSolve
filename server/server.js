// requires
var express = require( 'express' );
var app = express();
var index = require( '../modules/routes/index.js' );
var employee = require( '../modules/routes/employee.js' );

//uses
app.use( express.static( 'public' ) );
app.use( '/', index );
app.use( '/employee', employee );

//globals
var port = 9876;

//spin up server
app.listen( port, function(){
  console.log( 'server up on:', port );
}); // end spin up server
