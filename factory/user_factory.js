/*----------------------------------------------------------------------------------------------------------------------------------------------------
AngularJS 1.X
A module contains the different components of an AngularJS app
A controller manages the app's data
An expression displays values on the page
A filter formats the value of an expression
------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------------------------------------------
The FACTORY manipulates data (adding / deleting to array, marking as complete...)
------------------------------------------------------------------------------------------------------------------------------------------------------*/

(function() {
        'use strict';

        angular
            .module('stabList')
            .factory('user', function() {

                let loginUser = function(userObject) {
                    localStorage.setItem('user', JSON.stringify(userObject));
                }

                let getUser = function() {
                    if (localStorage.getItem(user)) {
                        return JSON.parse(localStorage.getItem("user"));
                      
                    }
                    return {};
                }

            /*----------------------------------------------------------------------------------------------------------------------------------------------------
            RETURN DATA : Expose data to use it...
            ------------------------------------------------------------------------------------------------------------------------------------------------------*/

                return {
                    loginUser,
                    getUser
                }
            });

            })();
