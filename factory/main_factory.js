(function() {
    'use strict';

    // Factory manipulate data (adding / deleting to array, marking as complete...)

    angular
        .module('stabList')
        .factory('todo', function() {

            // THIS IS MY ARRAY 
            let data = [];

            function Todo(description, isCompleted, id) {
                this.isCompleted = isCompleted;
                this.description = description;
                this.id = id;
            }

            // create function sole purpose is to get the data above
            var getData = function() {
                if (localStorage.getItem('data')) {
                    data = JSON.parse(localStorage.getItem('data'));
                    return data;

                }
                return data;
            }

            var addData = function(content) {

                var id = Date.now();
                var newTodo = new Todo(content, false, id);
                data.push(newTodo);
                localStorage.setItem('data', JSON.stringify(data));
                return data;
            }

            // User is creating an object but local storage can only hold strings...


            var deleteData = function(id) {
                var index;

                data.forEach(function(todo, arrayCounter) {
                    if (todo.id == id) {
                        index = arrayCounter;
                    }
                });

                data.splice(index, 1);
                localStorage.setItem('data', JSON.stringify(data));
                return data;

                // 1 indicates we only want to remove one item - otherwise everything after would also be removed.


            }


            // expose to use
            return {
                getData: getData,
                addData: addData,
                deleteData: deleteData
            }

        });

})();
