(function() {
    'use strict';


    // The controller handles any interaction with the user and taking data from the factory and presenting it back to user...

    // The CONTROLLER is always read first – it's like my normal JS file

    // Save all todo list data in an array:
    angular
        .module('stabList')
        .controller('ToDoController', function(todo) {

            let vm = this;

            // Pushes User Info Onto Object On Submit
            vm.submit = function(content) {
                vm.content = '';
                vm.items = todo.addData(content);
            }

            vm.delete = function(id) {
                vm.items = todo.deleteData(id);
            }

            vm.items = todo.getData();

        });
})();
