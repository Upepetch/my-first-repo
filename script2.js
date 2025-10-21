window.onload = addElement;

function addElement() {
  // Create a new section element
const newSection = document.createElement('section');

  // And give it some content
  const newContent = document.createTextNode('Hi There and greetngs!');

  // Add the text node to the newly created section
  newSection.appendChild(newContent);

  // add the newly created element and its contents into the DOM
  const currentSection = document.querySelector('#chapter-section-id');
  document.body.insertBefore(newSection, currentSection);
}