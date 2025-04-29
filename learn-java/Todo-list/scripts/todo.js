const todoList = [
  { name: "exercise", dueDate: "2025-12-01" },
  { name: "wash dishes", dueDate: "2023-11-25" },
];

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach(function (todoObject, index) {
    console.log(todoObject);
    // const name = todoObject.name;
    // const dueDate= todoObject.dueDate;
    const { name, dueDate } = todoObject;
    // console.log(dueDate);

    const html = `<div>${name}</div>
    <div> ${dueDate}</div> <button class="delete-button"
    onclick= "
    todoList.splice(${index},1);
    renderTodoList();
    ">
    Delete</button></li> `; //generating the html
    todoListHTML += html;
  });

  // console.log(todoListHTML);
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

renderTodoList();

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
