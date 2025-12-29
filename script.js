// ========== TASKS ==========
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
  const title = document.getElementById("task-title").value;
  const priority = document.getElementById("task-priority").value;

  if (!title || !priority) {
    alert("Please fill all task fields");
    return;
  }

  const task = { id: Date.now(), title, priority };
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
  clearTaskInputs();
}

function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML = `${task.title} (${task.priority}) <button onclick="deleteTask(${task.id})">Delete</button>`;
    taskList.appendChild(li);
  });
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function clearTaskInputs() {
  document.getElementById("task-title").value = "";
  document.getElementById("task-priority").value = "";
}

renderTasks();

// ========== EXPENSES ==========
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
  const title = document.getElementById("expense-title").value;
  const amount = document.getElementById("expense-amount").value;
  const category = document.getElementById("expense-category").value;

  if (!title || !amount || !category) {
    alert("Please fill all expense fields");
    return;
  }

  const expense = { id: Date.now(), title, amount: Number(amount), category };
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  renderExpenses();
  clearExpenseInputs();
}

function renderExpenses() {
  const list = document.getElementById("expense-list");
  list.innerHTML = "";
  let total = 0;
  expenses.forEach(exp => {
    total += exp.amount;
    const li = document.createElement("li");
    li.innerHTML = `${exp.title} (${exp.category}) - ₹${exp.amount} <button onclick="deleteExpense(${exp.id})">Delete</button>`;
    list.appendChild(li);
  });
  document.getElementById("total-expense").innerText = total;
}

function deleteExpense(id) {
  expenses = expenses.filter(exp => exp.id !== id);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  renderExpenses();
}

function clearExpenseInputs() {
  document.getElementById("expense-title").value = "";
  document.getElementById("expense-amount").value = "";
  document.getElementById("expense-category").value = "";
}

renderExpenses();



