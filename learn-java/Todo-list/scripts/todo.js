const todoList = [
  { name: "exercise", dueDate: "2025-12-01" },
  { name: "wash dishes", dueDate: "2023-11-25" },
];

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject, index) => {
    console.log(todoObject);
    // const name = todoObject.name;
    // const dueDate= todoObject.dueDate;
    const { name, dueDate } = todoObject;
    // console.log(dueDate);

    const html = `<div>${name}</div>
    <div> ${dueDate}</div> <button class="delete-button js-delete-button"
    onclick= "
    ">
    Delete</button></li> `; //generating the html
    todoListHTML += html;
  });

  // console.log(todoListHTML);
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  document
    .querySelectorAll(".js-delete-button") //querySelectorAll = select all delete buttons
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

renderTodoList();

document.querySelector(".js-add-button").addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector("input");
  const name = inputElement.value;
  const dueDateElement = document.querySelector(".js-due-date-button");
  const dueDate = dueDateElement.value;
  todoList.push({
    // name: name,
    // dueDate: dueDate
    //or
    name,
    dueDate,
  });
  inputElement.value = "";
  dueDateElement.value = "";
  console.log(todoList);
  renderTodoList();
}
