//Set variable for the toggle button
const buttonToggle = document.getElementById('button');

//Function to toggle between modern and retro mode 
function toggleMode() {
    
    //Changing the class styling between modern and retro mode
    const class1 = document.querySelector('.body');
    class1.classList.toggle('body-retro');
    const class2 = document.querySelector('.navigation-container');
    class2.classList.toggle('navigation-container-retro');
    const class3 = document.querySelector('.nav-list');
    class3.classList.toggle('nav-list-retro');
    const class4 = document.querySelector('.news-section');
    class4.classList.toggle('news-section-retro');
    const class5 = document.querySelector('.contact-form-section');
    class5.classList.toggle('contact-form-section-retro');
    const class6 = document.querySelector('.contact-form');
    class6.classList.toggle('contact-form-retro');
    const class7 = document.querySelector('.footer-container');
    class7.classList.toggle('footer-container-retro');

    //Changing the button styling and text between modern and retro mode
    const class8 = document.querySelector('.retro');
    class8.classList.toggle('modern'); 
    const class9 = document.body;
    if (class9.classList.contains("body-retro")) {
        buttonToggle.textContent = "Modern";
    } else {
        buttonToggle.textContent = "Retro";
    } 
}



