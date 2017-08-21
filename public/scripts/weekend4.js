var myApp = angular.module( 'myApp', [] );

myApp.controller( 'EmployeeController', [ '$http', function( $http ){
  var self = this;

  self.submitEmployee = function(){
    console.log( 'in controller submitEmployee' );
    var objectToSend = {
      fname: self.fNameIn,
      lname: self.lNameIn,
      jobtitle: self.jobTitleIn,
      salary: self.salaryIn
    } // end objectToSend
    console.log( 'sending:', objectToSend );
    $http({
      method: 'POST',
      url: 'employee',
      data: objectToSend
    }).then( function( response ){
      console.log( 'back from post with:', response.data );
    }); // end test run
  }; // end submitEmployee

}]); //end EmployeeController
