const listEL = document.querySelector(".list");
const input = document.querySelector("input");

// need to initialize empty array for .map function to work
let todoList = [];
let todoInputValue = "";
let counter = 0;

function onInputChange(event) {
  // changing the input to what the user types
  todoInputValue = event.target.value;
}

function addTodo() {
  // if input field is empty, break the function; will add empty strings if 'add' is pressed without this statement
  if (!todoInputValue) {
    return;
  }
  // add task onto DOM via the list array
  todoList.push({
    id: counter++,
    task: todoInputValue,
  });
  // rerender/update the HTML
  renderTodos();
  // reset the input field
  input.value = "";
  // Prevents adding the previous value to the DOM after pressing 'add' even if input is empty
  todoInputValue = "";
}

function deleteTodo(id) {
  // keep the tasks that do not match the id we are trying to delete
  todoList = todoList.filter((todo) => todo.id !== id);
  // rerender/update the todos
  renderTodos();
}

function renderTodos() {
  // mapping todo list to the list html, need .join("") to turn the array into a string
  listEL.innerHTML = todoList
    .map(
      (elem) => `
    <li class="task">
        ${elem.task}
        <button onclick="deleteTodo(${elem.id})" class="todo__delete">
            x
        </button>
    </li>`
    )
    .join("");
}
