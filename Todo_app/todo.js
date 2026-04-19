// 🧠 Load tasks from localStorage or start empty
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 🔹 Function to create UI for a task
function addTaskToUI(taskObj, index) {
    let li = document.createElement("li");

    // ✅ Checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = taskObj.completed;

    // 📝 Task text
    let span = document.createElement("span");
    span.innerText = taskObj.text;

    // Apply completed style if already done
    if (taskObj.completed) {
        span.classList.add("done");
    }

    // 🔄 Toggle complete
    checkbox.addEventListener("change", function () {
        span.classList.toggle("done");

        tasks[index].completed = checkbox.checked;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    // ❌ Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";

    deleteBtn.addEventListener("click", function () {
        tasks.splice(index, 1); // remove from array
        localStorage.setItem("tasks", JSON.stringify(tasks));

        li.remove(); // remove from UI
        renderTasks(); // re-render to fix indexes
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);
}


// 🔹 Function to render all tasks
function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // clear UI

    tasks.forEach((task, index) => {
        addTaskToUI(task, index);
    });
}


// 🔹 Add new task
function addTask() {
    let input = document.getElementById("taskInput");
    let text = input.value.trim();

    if (!text) {
        alert("Enter a task!");
        return;
    }

    let newTask = {
        text: text,
        completed: false
    };

    tasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTasks();

    input.value = "";
}


// 🔹 Load tasks when page opens
window.onload = function () {
    renderTasks();
};