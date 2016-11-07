/*----------------------------------------------------------------------------------------------------------------------------------------------------
AngularJS 1.X
A module contains the different components of an AngularJS app
A controller manages the app's data
An expression displays values on the page
A filter formats the value of an expression
------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------------------------------------------
The CONTROLLER is always read first – it's like my normal JS file.
Handles any interaction with the user and taking data from the factory and presenting it back to user...
------------------------------------------------------------------------------------------------------------------------------------------------------*/

(function() {
    'use strict';

    angular
        .module('stabList')
        .controller('UserController', function(user) {

            let vm = this;

            vm.loggedInUser = user.getUser();

            vm.login = function() {

                /*----------------------------------------------------------------------------------------------------------------------------------------------------
                Grabs name from the view...
                ------------------------------------------------------------------------------------------------------------------------------------------------------*/

                let newUser = {
                    name: vm.firstName+" "+vm.lastName,
                    time: Date.now(),
                }

                user.loginUser(newUser);

                vm.loggedInUser = newUser;

            }
        });

})();
