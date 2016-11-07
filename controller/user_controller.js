(function() {
        'use strict';

        angular
            .module('stabList')
            .factory('userController', function(user) {

                let vm = this;

                vm.loggedInUser = getUser();


                vm.login = function() {
                    // grab name from view
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