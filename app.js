    // main
let bodyElement = document.body;

// creting Elements 
let cardElement = document.createElement('div');
let imageContainer = document.createElement('div');
let infoContainer = document.createElement('div');
let imageElement = document.createElement('img');
let headingElement = document.createElement('h5');
let pElement = document.createElement('p');
let btnElement = document.createElement('a');

// applying classes to the generated elements 
cardElement.className = "card";
imageContainer.className = "image-container";
imageElement.className = "image";
headingElement.className = "heading";
infoContainer.className = "info-container";
pElement.className = "paragraph";
btnElement.className = "btn";

imageElement.src = "./images/photo.png";

btnElement.setAttribute("href", "#");
imageElement.setAttribute("alt", "image");

headingElement.innerText = "Yes, we can...";
pElement.innerText = "We can do  a lot with javascript, more than you can imagine and it's esier.";
btnElement.innerText = "Learn More";

bodyElement.appendChild(cardElement);
cardElement.append(imageContainer, infoContainer);
imageContainer.appendChild(imageElement);
infoContainer.append(headingElement, pElement, btnElement);
