//Empty array for the tasks
const tasks = [];

//Function to add tasks to the array
function addTask() {
    let newTask = document.getElementById('task-input').value;
    if (newTask) {
    tasks.push(newTask);
    displayTask();
    } else {
        alert('Please enter a task'); //Displays message if no text has been enetered when the 'Add Task' button is pressed
    }
}

//Function to display the contents of the array with a 'Remove Task' button
function displayTask() {
    let list = document.getElementById('list');
    list.textContent = '';
    tasks.forEach( (item, index) => {
        this.item = item;
        this.index = index;
        let newItem = document.createElement('li');
        newItem.classList.add('list-item');
        newItem.textContent = item + '';
        list.appendChild(newItem);
        let removeButton = document.createElement('button');
        removeButton.classList.add('remove-button');
        removeButton.textContent = 'Remove Task';
        list.appendChild(removeButton);
        removeButton.addEventListener('click', () =>
            removeTask(index)   
        )
        document.getElementById('task-input').value = '';
    })
}

//Event handler to call the addTask function when the 'Add Task' button is pressed
let addButton = document.getElementById('add-button');
addButton.addEventListener('click', () => 
    addTask()
)

//Function to remove the task when the 'Remove Task' button is pressed
function removeTask(index) {
    tasks.splice(index, 1);
    displayTask();
}