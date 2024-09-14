const tasks = [];

const renderElements = (arr) => {
    const taskList = document.querySelector("ul");

    taskList.innerHTML = "";

    for(let i = 0; i < arr.length; i++) {
        const currentTask = createTaskeItem(arr[i]);
        taskList.appendChild(currentTask);
    }
}

const createTaskeItem = (objetcTask) => {
    const taskItem = document.createElement("li");
    const taskInfoContainer = document.createElement("div");
    const taskType = document.createElement("span");
    const paragraph = document.createElement("p");
    const taskButton = document.createElement("button");

    paragraph.innerText = objetcTask.title;

    taskItem.className = "task__item";
    taskInfoContainer.className = "task-info__container";
    taskType.classList.add("task-type");
    taskButton.className = "task__button--remove-task";

    if(objetcTask.type === "Urgente") {
        taskType.classList.add("span-urgent");
    } else if(objetcTask.type == "Importante") {
        taskType.classList.add("span-important");
    } else if (objetcTask.type === "Normal") {
        taskType.classList.add("span-normal");
    }

    taskButton.addEventListener("click", function() {
        const index = tasks.indexOf(objetcTask);

        const confirmDelete = confirm (`Tem certeza que deseja apagar a tarefa ${objetcTask.title}!`)
            if (confirmDelete) {
             tasks.splice(index, 1);   
             renderElements(tasks);   
            }

    })

    taskInfoContainer.append(taskType, paragraph);
    taskItem.append(taskInfoContainer, taskButton);

    return taskItem;
}

const createdNewTask = () => {
    const form = document.querySelector(".form__button--add-task");

    form.addEventListener("click", function (e) {
        e.preventDefault();

        const inputTask = document.querySelector(".form__input--text");
        const inputPriority = document.querySelector(".form__input--priority");

        if (!inputTask.value || !inputPriority.value) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

        const newTask = {
            title: inputTask.value,
            type: inputPriority.value,
        };

        tasks.push(newTask);
        renderElements(tasks);

        inputTask.value = "";
        inputPriority.value = "";
    })
}

renderElements(tasks);
createdNewTask();