var myApp = angular.module( 'myApp', [] );

myApp.controller( 'EmployeeController', [ '$http', function( $http ){
  var self = this;

  self.getEmployees = function(){
    console.log( 'in controller getEmployees' );
    $http({
      method: 'GET',
      url: '/employee'
    }).then( function( response ){
      console.log( 'Back from get call with:', response.data );
      self.employees = response.data ;
      // calculate total annual salaries
      self.totalAnnualSalaries = 0;
      for (var i = 0; i < self.employees.length; i++) {
        self.totalAnnualSalaries += self.employees[i].salary;
      }
      // calculate monthly salary drain
      self.monthlySalaryDrain = self.totalAnnualSalaries / 12;
      console.log( 'tas:', self.totalAnnualSalaries );
      console.log( 'msd:', self.monthlySalaryDrain );
    }); // end http
  }; // end getEmployees

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
      self.getEmployees();
    }); // end test run
  }; // end submitEmployee
  // init page
  self.getEmployees();
}]); //end EmployeeController
