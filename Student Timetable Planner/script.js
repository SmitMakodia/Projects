document.addEventListener("DOMContentLoaded", function () {
    loadProgress();
    generateTimetable();
  
    // Set up modal event listeners
    document.getElementById("saveTaskButton").addEventListener("click", saveTask);
    document.getElementById("cancelTaskButton").addEventListener("click", closeModal);
  });
  
  // Default Goals
  const goals = {
    studyHours: 0,
    assignmentsDone: 0,
    studyTarget: 10,
    assignmentsTarget: 3
  };
  
  // Currently selected task for marking complete
  let selectedCell = null;
  // Current cell and hour when adding a new task from the modal
  let currentCell = null;
  let currentHour = "";
  
  // Load from Local Storage
  function loadProgress() {
    let savedData = localStorage.getItem("progress");
    if (savedData) {
      Object.assign(goals, JSON.parse(savedData));
    }
    updateUI();
  }
  
  // Save to Local Storage
  function saveProgress() {
    localStorage.setItem("progress", JSON.stringify(goals));
  }
  
  // Update Progress UI
  function updateUI() {
    document.getElementById("studyHours").textContent = goals.studyHours;
    document.getElementById("studyProgress").value = goals.studyHours;
    document.getElementById("studyPercent").textContent =
      Math.round((goals.studyHours / goals.studyTarget) * 100) + "%";
  
    document.getElementById("assignmentsDone").textContent = goals.assignmentsDone;
    document.getElementById("assignmentsProgress").value = goals.assignmentsDone;
    document.getElementById("assignmentsPercent").textContent =
      Math.round((goals.assignmentsDone / goals.assignmentsTarget) * 100) + "%";
  
    saveProgress();
    updateChart();
  }
  
  // Reset Progress
  function resetProgress() {
    goals.studyHours = 0;
    goals.assignmentsDone = 0;
    updateUI();
  }
  
  // Generate Timetable
  function generateTimetable() {
    const scheduleBody = document.getElementById("schedule-body");
    scheduleBody.innerHTML = "";
  
    const hours = [
      "8 AM",
      "9 AM",
      "10 AM",
      "11 AM",
      "12 PM",
      "1 PM",
      "2 PM",
      "3 PM",
      "4 PM",
      "5 PM"
    ];
    hours.forEach(hour => {
      const row = document.createElement("tr");
  
      // Create the time cell
      let timeCell = document.createElement("td");
      timeCell.textContent = hour;
      row.appendChild(timeCell);
  
      // Create 7 cells for each day of the week
      for (let i = 0; i < 7; i++) {
        let cell = document.createElement("td");
        cell.classList.add("slot");
        cell.onclick = function () {
          handleCellClick(cell, hour);
        };
        row.appendChild(cell);
      }
      scheduleBody.appendChild(row);
    });
  }
  
  // Handle cell click
  function handleCellClick(cell, hour) {
    if (cell.textContent.trim()) {
      // If the cell already has a task, allow marking it complete.
      selectedCell = cell;
      document.getElementById("selectedTask").textContent =
        cell.textContent + " (" + hour + ")";
      document.getElementById("taskControl").style.display = "block";
    } else {
      // Save current cell and hour then open the modal.
      currentCell = cell;
      currentHour = hour;
      openModal(hour);
    }
  }
  
  // Open Modal for task input
  function openModal(hour) {
    document.getElementById("modalTitle").textContent = "Add Task for " + hour;
    document.getElementById("taskInput").value = "";
    document.getElementById("assignmentCheckbox").checked = false;
    document.getElementById("taskModal").style.display = "block";
  }
  
  // Close Modal
  function closeModal() {
    document.getElementById("taskModal").style.display = "none";
  }
  
  // Save task from modal
  function saveTask() {
    const taskText = document.getElementById("taskInput").value.trim();
    if (taskText && currentCell) {
      currentCell.textContent = taskText;
      // Set a data attribute to indicate if this is an assignment task.
      const isAssignment = document.getElementById("assignmentCheckbox").checked;
      currentCell.dataset.assignment = isAssignment ? "true" : "false";
    }
    closeModal();
  }
  
  // Mark Task as Completed
  function markCompleted() {
    if (selectedCell) {
      selectedCell.style.background = "#90EE90"; // Light green indicates completion
  
      // Update progress based on the task type
      if (selectedCell.dataset.assignment === "true") {
        addAssignmentProgress();
      } else {
        addStudyHours(1); // Assume 1 hour per completed regular task
      }
  
      selectedCell = null;
      document.getElementById("taskControl").style.display = "none";
    }
  }
  
  // Add Study Hours
  function addStudyHours(hours) {
    goals.studyHours += hours;
    if (goals.studyHours > goals.studyTarget) goals.studyHours = goals.studyTarget;
    updateUI();
  }
  
  // Add Assignment Progress
  function addAssignmentProgress() {
    goals.assignmentsDone += 1;
    if (goals.assignmentsDone > goals.assignmentsTarget)
      goals.assignmentsDone = goals.assignmentsTarget;
    updateUI();
  }
  
  // Chart.js Graph for Time Distribution
  let chartInstance;
  function updateChart() {
    let ctx = document.getElementById("timeChart").getContext("2d");
    if (chartInstance) chartInstance.destroy();
    chartInstance = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Study Hours", "Assignments Completed"],
        datasets: [
          {
            data: [goals.studyHours, goals.assignmentsDone],
            backgroundColor: ["#3498db", "#e74c3c"]
          }
        ]
      }
    });
  }
  