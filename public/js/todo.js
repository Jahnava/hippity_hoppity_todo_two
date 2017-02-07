//factory function -This is the main function which all of the other code will be referencing
//Function has been declared as createTodo with avariable todo 
//A function is a block of JS code that can be executed when called for. This function can be called for when an event occurs such as a button being pressed.
function createTodo(task, date, category){
  var todo = {};
  todo.task = task; //setting and properties
  todo.date = date;
  todo.category = category;
  return todo;
}
