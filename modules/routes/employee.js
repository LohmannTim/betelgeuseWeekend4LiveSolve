var express = require( 'express' );
var router = express.Router();
var bodyParser = require( 'body-parser' );
var pool = require( '../pool.js' );
// b/c this isn't AJAX
router.use( bodyParser.json() );

router.get( '/', function( req, res ){
  console.log( 'employee get route hit' );
  pool.connect( function( err, connection, done ){
    if( err ){
      console.log( 'error connecting to db:', err );
      res.sendStatus( 500 );
    } // end error
    else{
      console.log( 'connected to db' );
      res.send( 'meow' );
    } // end no error
  }); // end pool connect
}); // end get

router.post( '/', function( req, res ){
  console.log( 'employee post route hit:', req.body );
  pool.connect( function( err, connection, done ){
    if( err ){
      console.log( 'error connecting to db:', err );
      res.sendStatus( 500 );
    } // end error
    else{
      console.log( 'connected to db' );
      connection.query( 'INSERT INTO employees ( fname, lname, jobtitle, salary ) values ( $1, $2, $3, $4 )',
      [ req.body.fname, req.body.lname, req.body.jobtitle, req.body.salary ], function( err ){
        if( err ){
          console.log( 'error writing to table:', err );
          res.sendStatus( 500 );
        }// end error
        else{
          console.log( 'record written' );
          res.sendStatus( 201 );
        } // end no error
      }); // end query
    } // end no error
  }); // end pool connect
}); // end post

module.exports = router;
