const taskEl = document.querySelector(".task");
const listEL = document.querySelector(".list");

function add() {
  listEL.map((task) => taskHTML(task));
}

function remove() {
  taskEl.remove();
}

function taskHTML(task) {
  return `
    <li class="task">
        ${task}
        <button onclick="remove()" class="todo__delete">
            x
        </button>
    </li>`;
}
