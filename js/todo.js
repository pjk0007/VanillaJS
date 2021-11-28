const todoInputForm = document.querySelector(".todo__input form");
const todoInputText = document.querySelector(".todo__input form input");
const todoInputButton = document.querySelector(".todo__input form button");

const TODO_KEY = "todos";
let todos = [];

function deleteTodo(event) {
  const content = event.target.parentElement;
  console.log(content.id);
  content.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(content.id));
  saveTodos();
  paintTodos();
}

function paintTodo(todo) {
  const content = document.createElement("div");
  content.className = "todo__list__content";
  content.id = todo.id;

  const title = document.createElement("div");
  title.innerText = todo.text;

  const button = document.createElement("button");
  button.innerText = "Done!";
  button.addEventListener("click", deleteTodo);

  content.appendChild(title);
  content.appendChild(button);

  return content;
}

function paintNothing() {
  const list = document.querySelector(".todo__list");
  list.innerHTML = "";
  const nothing = document.createElement("div");
  nothing.className = "todo__list__nothing";
  nothing.innerText = "Nothing To Do";
  list.appendChild(nothing);
}

function paintTodos() {
  if (todos.length === 0) {
    paintNothing();
  } else {
    const list = document.querySelector(".todo__list");
    list.innerHTML = "";

    todos.forEach((todo) => {
      console.log("asdf");
      const rowTodo = paintTodo(todo);
      list.appendChild(rowTodo);
    });
  }
}

function saveTodos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function onTodoSubmit(event) {
  event.preventDefault();
  const newTodo = { text: todoInputText.value, id: Date.now() };
  todoInputText.value = "";
  todos.push(newTodo);
  saveTodos();
  paintTodos();
}

todoInputForm.addEventListener("submit", onTodoSubmit);
const savedTodos = localStorage.getItem(TODO_KEY);

if (savedTodos !== null) {
  todos = JSON.parse(savedTodos);
} else {
  todos = [];
}
paintTodos();
