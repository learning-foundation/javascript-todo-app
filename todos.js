var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  listElement.innerHTML = "";
  for (todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement("a");
    var linkText = document.createTextNode("Delete");
    linkElement.appendChild(linkText);
    linkElement.setAttribute("href", "#");

    var pos = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "removeTodo(" + pos + ")");

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

function addTodo() {
  var todoText = inputElement.value;
  if (todoText) {
    todos.push(todoText); // insert element in the end of an array
    inputElement.value = "";
    renderTodos();
    saveToStorage();
  }
}

function removeTodo(pos) {
  todos.splice(pos, 1); // remove element from array
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("todos", JSON.stringify(todos)); // convert to string
}

buttonElement.onclick = addTodo;

renderTodos();
