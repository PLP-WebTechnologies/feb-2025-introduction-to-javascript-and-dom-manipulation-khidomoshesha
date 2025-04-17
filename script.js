// Get the buttons by their IDs
const changeTextBtn = document.getElementById('changeTextBtn');
const changeStyleBtn = document.getElementById('changeStyleBtn');
const addElementBtn = document.getElementById('addElementBtn');

// Change text content dynamically
changeTextBtn.addEventListener('click', function () {
    const aboutSection = document.getElementById('about');
    const newText = "This text has been updated dynamically!";
    const pElement = document.createElement('p');
    pElement.textContent = newText;
    aboutSection.appendChild(pElement);
});

// Modify CSS styles via JavaScript
changeStyleBtn.addEventListener('click', function () {
    const aboutSection = document.getElementById('about');
    aboutSection.style.backgroundColor = '#f0f0f0'; // Change background color
    aboutSection.style.padding = '20px'; // Add padding
    aboutSection.style.borderRadius = '10px'; // Add rounded corners
});

// Add a new element when a button is clicked
addElementBtn.addEventListener('click', function () {
    const newElement = document.createElement('p');
    newElement.textContent = "This is a new paragraph element added dynamically!";
    document.body.appendChild(newElement); // Add it to the body of the document
});
