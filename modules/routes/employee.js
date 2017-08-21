var express = require( 'express' );
var router = express.Router();
var bodyParser = require( 'body-parser' );
// b/c this isn't AJAX
router.use( bodyParser.json() );

router.get( '/', function( req, res ){
  console.log( 'employee get route hit' );
  res.send( 'meow' );
}); // end get

router.post( '/', function( req, res ){
  console.log( 'employee post route hit:', req.body );
  res.send( 'ribbet' );
}); // end post

module.exports = router;
