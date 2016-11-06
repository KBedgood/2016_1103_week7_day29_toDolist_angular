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

// expose information for use
                return {
                    loginUser,
                    getUser
                }
            });


            })();
