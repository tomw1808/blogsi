'use strict';

/**
 * @ngdoc service
 * @name todotsiApp.Todo
 * @description
 * # Todo
 * Service in the todotsiApp.
 *
 * PATH: app/services/todo.js
 */
angular.module('todotsiApp')
    .service('TodoService', function Todo() {
        var self = this;
        if(typeof localStorage['todolist'] == 'undefined') {
            localStorage['todolist'] = JSON.stringify(
                [
                    {text: "Get some milk", done: false},
                    {text: "Do the laundry", done: false},
                    {text: "Feed the dog", done: true}
                ]
            )
        }
        this.arrToDos = JSON.parse(localStorage['todolist']);

        this.getTodoList = function() {
            return self.arrToDos;
        };

        this.saveTodoList = function() {
            localStorage['todolist'] = JSON.stringify(self.arrToDos);
        }


    });
