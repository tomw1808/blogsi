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
    .service('TodoService', function Todo(TodoResource) {
        var self = this;
        this.todoList = TodoResource.query();

        this.saveTodoList = function() {
           // localStorage['todolist'] = JSON.stringify(self.arrToDos);
        }


    });
