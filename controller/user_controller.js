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
        .factory('userController', function(user) {

            let vm = this;

            vm.loggedInUser = getUser();

            vm.login = function() {

                /*----------------------------------------------------------------------------------------------------------------------------------------------------
                Grabs name from the view...
                ------------------------------------------------------------------------------------------------------------------------------------------------------*/

                alert(vm.user.name)

                let user = {
                    name: vm.user.name,
                    time: Date.now(),
                }

                user.loginUser(userName);

                vm.loggedInUser = userName;

            }
        });

})();
