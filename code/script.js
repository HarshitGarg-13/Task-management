document.addEventListener("DOMContentLoaded", () => {
  const todoTasks = document.getElementById("todo-tasks");
  const inProgressTasks = document.getElementById("in-progress-tasks");
  const doneTasks = document.getElementById("done-tasks");

  const addTask = (board, task) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task");
    taskItem.innerHTML = `
      <div class="details">
        <span class="priority">${task.priority}</span>
        <span>${task.name}</span>
        <div class="label">${task.label}</div>
      </div>
      <span class="deadline">${task.deadline}</span>
    `;
    board.appendChild(taskItem);
  };

  const tasks = [
    {
      name: "Name - Complete project proposal",
      priority: "Priority - High, ",
      label: "Label - Urgent",
      deadline: "Deadline - 2023-08-20",
      status: "todo"
    },
    {
      name: "Name - Design user interface",
      priority: "Priority - Medium, ",
      label: "Label - Design",
      deadline: "Deadline - 2023-08-25",
      status: "inProgress"
    },
    {
      name: "Name - Implement functionality",
      priority: "Priority - Low, ",
      label: "Label - Development",
      deadline: "Deadline - 2023-08-30",
      status: "done"
    }
    // Add more tasks here
  ];

  tasks.forEach(task => {
    if (task.status === "todo") {
      addTask(todoTasks, task);
    } else if (task.status === "inProgress") {
      addTask(inProgressTasks, task);
    } else if (task.status === "done") {
      addTask(doneTasks, task);
    }
  });
});
