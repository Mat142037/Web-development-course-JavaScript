let tasks = []; //Array for the tasks

//Fuction to add tasks inputted to the array
function addTask () {
    const newTask = document.querySelector('input#task-input').value; //Takes value from new task input
    if (newTask) {
    tasks.push(newTask) //Adds new task to the array
    displayTask();
    }
}

//Fuction to display tasks in the list
function displayTask () {
    const currentList = document.querySelector('ol#task-list');
    currentList.textContent = '';
    tasks.forEach(addFunction);
    function addFunction(item, index) {
        this.item = item;
        this.index = index;
        const newListItem = document.createElement("li"); //Creates a new list element
        newListItem.classList.add('item'); //Adds a class to the task
        newListItem.textContent = item + ' '; //Creates the new task content from the lastest task addded
        currentList.insertAdjacentElement("beforeend", newListItem); //Adds the new li element with the new task inside and put it in the ul element    
        document.querySelector('input#task-input').value = ''; //Clears the new task input field 
        const completeTask = document.createElement("button");
        completeTask.classList.add('checkbox');
        newListItem.appendChild(completeTask);

        //Template literal to add a completed checkbox
        const checkBox = ` 
        <label for="checkbox" style="font-size: 10px; color: green;">Completed</label>
        <input type="checkbox" id="checkbox">
        `;
        completeTask.innerHTML = checkBox;

        //Adding an edit button
        const editButton = document.createElement("button"); //Creates an edit button for each task
        editButton.classList.add('edit-button'); //Adds a class to the edit button
        editButton.textContent = 'Edit task'; //Labels the edit button
        newListItem.appendChild(editButton); //Adds the button as a child to the li element
        editButton.onclick = function() { //When edit button is clicked the triggers the editTask function
            editTask(index);
        }

        //Adding a delete button
        const deleteButton = document.createElement("button"); 
        deleteButton.classList.add('remove-button'); 
        deleteButton.textContent = 'Remove task'; 
        newListItem.appendChild(deleteButton);
        deleteButton.onclick = function() { 
            deleteTask(index);
        }
    }}

//Function to edit the task
function editTask(index) {
    const newTask = document.querySelector('input#task-input').value;
    tasks[index] = newTask;
    document.querySelector('input#task-input').value = '';
    displayTask();
}

//Function to delete the task
function deleteTask(index) {
    tasks.splice(index, 1); //Removes the index selected (the 1 is the number of index to be removed)
    displayTask();
}



