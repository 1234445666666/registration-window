//создание do to list
const toDo = document.querySelector(".to__do");
const toDoList = document.querySelector("#to__do__list");
const toDoInput = document.querySelector("#to__do");
const addToDo = document.querySelector("#add__to__do");
const removeToDo = document.querySelector("#remove__to__do");
const removeAll = document.querySelector("#remove__all__to__do");

addToDo.addEventListener("click", () => {
    if (toDoInput.value !== "") {
        const toDoItem = document.createElement("li");
        toDoItem.textContent = toDoInput.value;
        toDoList.append(toDoItem);
        toDoInput.value = "";
    } else {
        alert("Введите задачу");
    }
});

removeToDo.addEventListener("click", () => {
    toDoList.lastElementChild.remove();
});

removeAll.addEventListener("click", () => {
    toDoList.innerHTML = "";
});

//возвращение назад
const btnBack3 = document.querySelector("#btnBack3");

btnBack3.addEventListener("click", () => {
    document.querySelector(".registration").style.display = "none";
    document.querySelector(".password").style.display = "flex";
    document.querySelector(".users__base").style.display = "none";
    document.querySelector(".to__do").style.display = "none";
});

toDoList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
});
