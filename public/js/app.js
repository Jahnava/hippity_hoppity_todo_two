//Variable container with todoApp inside of it.
//Empty brackets are referencing an empty array to store multiple items inside it.
//A function is a subprogram that can be called by code to the function body. A function is made up of a sequence of statements called the "function body". Values can be sent to the function and values will be returned from the function.
//We are adding EventListeners to the todo app variable.
var todoApp = {
todos: [], //data source/store
init: function(){
  todoApp.cacheDom();
  todoApp.addEventListeners();
  todoApp.render();
},

//DOM is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.
//We are caching the Dom for the todoApp. This stores all of the information in the code on the web.
cacheDom: function(){
  todoApp.createButton = document.querySelector('#create');
  todoApp.taskInput = document.querySelector('#task');
  todoApp.categoryInput = document.querySelector('#category');
  todoApp.dateInput = document.querySelector('#date');
  todoApp.list = document.querySelector('#list');
},

render: function(){
  console.log(todoApp.todos);
var listItemsFromTodos =todoApp.todos
                           .map(function(todo){

                             return `<li>${todo.task}:(${todo.date})[${todo.category}]</li>`;
                           })
                           .join('');

  todoApp.list.innerHTML = listItemsFromTodos;
},
addEventListeners: function(){
  todoApp.createButton.addEventListener('click', todoApp.addTodo);
},
  addTodo: function(){

    var task = todoApp.taskInput.value; //specific to input fiels
    var date = todoApp.dateInput.value;
    var category = todoApp.categoryInput.value;
    var newTodo = createTodo(task, date, category);
    todoApp.todos.push(newTodo);
    todoApp.taskInput.value = '';
    todoApp.dateInput.value ='';
    todoApp.categoryInput.value ='';
    todoApp.render();
  }
};
//console.log(todoApp);
todoApp.init();
//console.log(todoApp);
