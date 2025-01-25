document.addEventListener('DOMContentLoaded', function() {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
      // Trim and validate task input
      const taskText = taskInput.value.trim();
      
      if (taskText === '') {
          alert('Please enter a task');
          return;
      }

      // Create list item and remove button
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn');
      
      // Add remove functionality
      removeButton.onclick = function() {
          taskList.removeChild(listItem);
      };

      // Append remove button to list item
      listItem.appendChild(removeButton);
      
      // Add list item to task list
      taskList.appendChild(listItem);

      // Clear input field
      taskInput.value = '';
  }

  // Event listener for add button
  addButton.addEventListener('click', addTask);

  // Event listener for enter key in input
  taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          addTask();
      }
  });
});