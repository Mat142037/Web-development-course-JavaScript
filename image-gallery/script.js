//Function to add image to the gallery
function addImage() {
const image = document.getElementById('URL-input').value;
var gallery;
var newDiv;
var newImage;
var removeButton;

if (image) {
    //Access to the section in the HTML
    gallery = document.getElementById('gallery');

    //Creating a new div element
    newDiv = document.createElement('div');

    //Adding the div element to the section element
    gallery.appendChild(newDiv);

    //Creating a new image element
    newImage = document.createElement('img');

    //Adding a class to the image element
    newImage.classList.add('image');

    //Changing the src attribute of the img element
    newImage.setAttribute('src', 'images/' + image + '.jpg');

    //Changing the alt attribute of the img element
    newImage.setAttribute('alt', 'Image of a ' + image);

    //Creating a button element
    removeButton = document.createElement('button');

    //Adding text to the button element
    removeButton.textContent = 'Remove Image';

    //Adding a class to the button element
    removeButton.classList.add('remove-button');

    //Adding the img and button elements to the new div element
    newDiv.appendChild(newImage);
    newDiv.appendChild(removeButton);

    //Adding an event listner to remove the new div element and its cintent from the section element
    removeButton.addEventListener('click', () =>
        gallery.removeChild(newDiv),
    );

    //Clearing the input field
    document.getElementById('URL-input').value = '';
}
}

//Event listener to call the addImage function
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', () => 
    addImage()
)



