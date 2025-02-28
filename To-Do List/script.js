// Function to set the theme
function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    document.getElementById('modeToggle').textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme') || localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

document.getElementById('modeToggle').addEventListener('click', toggleTheme);

window.addEventListener('load', function () {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
});



// Utility function to toggle modal visibility
function toggleModal(modalId, show) {
    const modal = document.getElementById(modalId);
    modal.style.display = show ? 'flex' : 'none';
}

// Update button visibility based on login status
function updateButtonVisibility() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) ||
        JSON.parse(sessionStorage.getItem('loggedInUser'));

    if (isLoggedIn === "true" && loggedInUser) {
        document.getElementById('authButtons').style.display = 'none';
        document.getElementById('logoutButton').style.display = 'inline-block';
        document.getElementById('openAddTask').style.display = 'inline-block';
        document.getElementById('taskList').style.display = 'block';
    } else {
        document.getElementById('authButtons').style.display = 'block';
        document.getElementById('logoutButton').style.display = 'none';
        document.getElementById('openAddTask').style.display = 'none';
        document.getElementById('taskList').style.display = 'none';
    }
}

// Show task management UI
function showTaskManagementUI() {
    updateButtonVisibility();
    loadTasks();
}

// Modal open button event listeners
document.getElementById('openLogin').addEventListener('click', () => {
    toggleModal('loginModal', true);
});
document.getElementById('openRegister').addEventListener('click', () => {
    toggleModal('registerModal', true);
});
document.getElementById('openAddTask').addEventListener('click', () => {
    toggleModal('addTaskModal', true);
});

// Close modal event listeners (for elements with class "close-modal")
document.querySelectorAll('.close-modal').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const modalId = e.target.getAttribute('data-close');
        toggleModal(modalId, false);
    });
});

/* -------------------------------------------
   User Authentication
---------------------------------------------*/

// Registration Form Submission
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const username = document.getElementById('regUsername').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;

    const errorDiv = document.getElementById('registerError');
    errorDiv.textContent = '';

    // Validate password length
    if (password.length < 8) {
        errorDiv.textContent = 'Password must be at least 8 characters long.';
        return;
    }

    // Retrieve existing users or initialize array
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email already exists
    if (users.some((user) => user.email === email)) {
        errorDiv.textContent = 'A user with this email already exists.';
        return;
    }

    // Create new user object
    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful! Please login.');
    document.getElementById('registerForm').reset();
    toggleModal('registerModal', false);
});

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    const errorDiv = document.getElementById('loginError');
    errorDiv.textContent = '';

    // Retrieve users
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find matching user
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
        alert(`Welcome, ${user.username}!`);

        // Set login flag
        localStorage.setItem('isLoggedIn', "true");

        // Save user session (rememberMe determines storage)
        if (rememberMe) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            sessionStorage.removeItem('loggedInUser');
        } else {
            sessionStorage.setItem('loggedInUser', JSON.stringify(user));
            localStorage.removeItem('loggedInUser');
        }

        toggleModal('loginModal', false);
        document.getElementById('loginForm').reset();
        showTaskManagementUI();
    } else {
        errorDiv.textContent = 'Invalid email or password.';
    }
});

// Logout functionality
document.getElementById('logoutButton').addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    sessionStorage.removeItem('loggedInUser');
    localStorage.removeItem('isLoggedIn');
    alert('You have logged out.');
    updateButtonVisibility();
});

/* -------------------------------------------
   Task Management
---------------------------------------------*/

// Add Task Form Submission
document.getElementById('addTaskForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('taskTitle').value.trim();
    const description = document.getElementById('taskDescription').value.trim();
    const dueDate = document.getElementById('taskDueDate').value;

    // Create a new task object (default not completed)
    const task = { title, description, dueDate, completed: false };

    // Retrieve existing tasks or initialize array
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    document.getElementById('addTaskForm').reset();
    toggleModal('addTaskModal', false);

    // Reload the task list
    loadTasks();
});

// Function to load tasks from localStorage and display them
// Function to load tasks from localStorage and display them
function loadTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear previous tasks

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        // Add "completed" class if the task is completed
        if (task.completed) {
            taskElement.classList.add('completed');
        }

        taskElement.innerHTML = `
    <div class="task-header">
        <div class="task-name">${task.title}</div>
        <div class="task-date">Due: ${task.dueDate}</div>
    </div>
    <div class="task-description">
        ${task.description}
    </div>
    <div class="task-buttons">
        <button class="btn" onclick="toggleTaskCompletion(${index})">
            ${task.completed ? 'Undo' : 'Complete'}
        </button>
        <button class="btn" onclick="editTask(${index})">Edit</button>
        <button class="btn" onclick="deleteTask(${index})">Delete</button>
    </div>
`;
        taskList.appendChild(taskElement);
    });
}

// Toggle Task Completion
function toggleTaskCompletion(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}

// Edit Task: Open edit modal and populate fields with the task details
function editTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks[index];

    document.getElementById('editTaskId').value = index;
    document.getElementById('editTaskTitle').value = task.title;
    document.getElementById('editTaskDescription').value = task.description;
    document.getElementById('editTaskDueDate').value = task.dueDate;

    toggleModal('editTaskModal', true);
}

// Edit Task Form Submission: Save changes and update task
document.getElementById('editTaskForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const index = document.getElementById('editTaskId').value;
    const title = document.getElementById('editTaskTitle').value.trim();
    const description = document.getElementById('editTaskDescription').value.trim();
    const dueDate = document.getElementById('editTaskDueDate').value;

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks[index] = { title, description, dueDate, completed: tasks[index].completed };
    localStorage.setItem('tasks', JSON.stringify(tasks));

    document.getElementById('editTaskForm').reset();
    toggleModal('editTaskModal', false);
    loadTasks();
});

// Delete Task
function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}

// On page load, check login status and update UI accordingly
window.onload = function () {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) ||
        JSON.parse(sessionStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        showTaskManagementUI();
    } else {
        updateButtonVisibility();
    }
};