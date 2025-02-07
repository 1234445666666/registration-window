//создание do to list
const toDo = document.querySelector(".to__do");
const toDoList = document.querySelector("#to__do__list");
const toDoInput = document.querySelector("#to__do");
const addToDo = document.querySelector("#add__to__do");
const removeAll = document.querySelector("#remove__all__to__do");

addToDo.addEventListener("click", () => {
  if (toDoInput.value.trim !== "") {
    createTodoItem(toDoInput.value.trim());
    toDoInput.value = "";
  } else {
    alert("Введите задачу");
  }
});

//функция создания задач,выполнение и удаление
createTodoItem = (text) => {
  const todoItem = document.createElement("li");
  todoItem.className = "to__do__list__item";

  todoItem.insertAdjacentHTML(
    "beforeend",
    `
      <span class="icon icon__done"></span>
      <span>${text}</span>
      <span class="icon icon__delete"></span>
    `
  );

  const iconDone = todoItem.querySelector(".icon__done");
  const iconDelete = todoItem.querySelector(".icon__delete");

  toDoList.appendChild(todoItem);

  iconDone.addEventListener("click", () => {
    todoItem.classList.toggle("complete");
  });

  iconDelete.addEventListener("click", () => {
    toDoList.removeChild(todoItem);
    counterTODO.textContent = toDoList.childElementCount;
  });
};

//счетчик задач
const counterTODO = document.querySelector("#counter");

addToDo.addEventListener("click", () => {
  counterTODO.textContent = toDoList.childElementCount;
});

removeAll.addEventListener("click", () => {
  counterTODO.textContent = toDoList.childElementCount;
});

//возвращение назад
const btnBack3 = document.querySelector("#btnBack3");

btnBack3.addEventListener("click", () => {
  document.querySelector(".registration").style.display = "none";
  document.querySelector(".password").style.display = "flex";
  document.querySelector(".users__base").style.display = "none";
  document.querySelector(".to__do").style.display = "none";
});
