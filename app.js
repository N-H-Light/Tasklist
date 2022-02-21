// Define UI variables

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".collection");

form.addEventListener("submit", addTask);

function addTask(e) {
  if (taskInput.value === "") {
    alert("Please add a task!");
  } else {
    // Create li element
    const li = document.createElement("li");

    // Add CSS class
    li.className = "collection-item";

    // Create text node with task input value and append to the li
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link element
    const link = document.createElement("a");

    // Add CSS class
    link.className = "delete-item secondary-content";

    // Add icon
    link.innerHTML = '<i class="material-icons">delete</i>';

    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    storeTaskInLocalStorage(taskInput.value);

    //clear input
    taskInput.value = "";
  }

  e.preventDefault();
}
//Store task in local storage
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("task") === null) {
    tasks = [];
  } else {
    tasks = Json.parse(localStorage.getItem("task"));
  }

  tasks.push(task);
  localStorage.setItem("task", JSON.stringify(tasks));
}
