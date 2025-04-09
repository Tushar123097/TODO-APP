// Step 1: Get all the necessary DOM elements
document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.querySelector('input');
    const addButton = document.querySelector('button');
    const taskContainer = document.getElementById('text');

    // Add some console logs to verify our elements are found
   

    // Step 2: Add click event listener to the button
    addButton.addEventListener('click', addTask);

    // Step 3: Create the addTask function
    function addTask() {
        // Get the input value and remove extra spaces
        const taskText = inputBox.value.trim();
       
        // Step 4: Validate the input
        if (taskText === '') {
            alert('Please enter a task!');
            return; // Stop the function if input is empty
        }
        
        // Step 5: Create new task element
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.textContent = taskText;
        
        // Add some styling to make it visible
        taskElement.style.transition = 'opacity 0.3s ease';
        taskElement.style.opacity = '1';
        taskElement.style.cursor = 'pointer';
        
        // Step 6: Add click event to delete task
        taskElement.addEventListener('click', function() {
            // Add a fade-out effect
            this.style.opacity = '0';
            setTimeout(() => {
                this.remove();
            }, 300); // Remove after transition
        });
        
        // Step 7: Add task to container
        taskContainer.appendChild(taskElement);
       
        // Step 8: Clear input field
        inputBox.value = '';
        
        // Step 9: Focus back on input
        inputBox.focus();
    }

    // Step 10: Allow adding task with Enter key
    inputBox.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});