angular.module('ToDoApp', []).controller('toDoController', [
  '$scope',
  function($scope) {
    $scope.todos = [
      {
        title: 'Build a ToDo list',
        done: false
      }
    ];
    // add new list item
    $scope.addToDo = function() {
      $scope.todos.push({ title: $scope.newToDo, done: false });
      $scope.newToDo = '';
      console.log($scope.newToDo);
    };
    // clear finished list items
    $scope.clearCompleted = function() {
      $scope.todos = $scope.todos.filter(function(item) {
        return !item.done;
      });
    };
  }
]);
