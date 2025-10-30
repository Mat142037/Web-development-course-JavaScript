//Array to hold the list inputted by user
const list = [];

//Event listeners to activate the funtions when the buttons are clicked
const addEndButton = document.getElementById('addend');
addEndButton.addEventListener('click', function() {
    push();
});
const addStartButton = document.getElementById('addstart');
addStartButton.addEventListener('click', function() {
    unshift();
});
const removeEndButton = document.getElementById('removeend');
removeEndButton.addEventListener('click', function() {
    pop();
})
const removeStartButton = document.getElementById('removestart');
removeStartButton.addEventListener('click', function() {
    shift();
} )
const insertButton = document.getElementById('insert');
insertButton.addEventListener('click', function() {
    splice();
} )
const removeButton = document.getElementById('remove');
removeButton.addEventListener('click', function() {
    spliceRemove();
} )

//Fuction to add to the array at the end using the push method
function push() {
    const newTask = document.getElementById('newitem').value;
    if (newTask) {
        list.push(newTask);
        display();
    }
}

//Fuction to add to the array at the start using the unshift method
function unshift() {
    const newTask = document.getElementById('newitem').value;
    if (newTask) {
        list.unshift(newTask);
        display();
    }
}

//Fuction to add to the array at a specified position using the splice method
function splice() {
    const newTask = document.getElementById('newitem').value;
    const inputIndex = document.getElementById('index').value;
    if (newTask) {
        list.splice((inputIndex - 1), 0, [newTask]);
        display();
    }
}

//Fuction to remove from the array at a specified position using the splice method
function spliceRemove() {
    const inputIndex = document.getElementById('index').value;
    if (inputIndex) {
        list.splice((inputIndex - 1), 1);
        display();
    }
}

//Function to remove from the end of the array using the pop method
function pop() {
    list.pop();
    display();
}

//Function to remove from the start of the array using the shift method
function shift() {
    list.shift();
    display();
}

//Function to display the array on the DOM using the forEach method
function display() {
    const listDisplay = document.querySelector('#arraylist');
    listDisplay.textContent = " ";
    list.forEach(updateList);
    function updateList(value, index) {
        this.value = value;
        this.index = index;
        const newItem = document.createElement('li');
        newItem.textContent = value;
        listDisplay.insertAdjacentElement("beforeend", newItem);
        document.getElementById('newitem').value = " ";
    }
}


