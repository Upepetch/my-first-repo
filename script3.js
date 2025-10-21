document.addEventListener('DOMContentLoaded', addElement);

function addElement() {
  // Create a new section element
const newSection = document.createElement('section');

  // add a class to the new section
  newSection.classList.add('chapter-section');

  // create a new paragraph element
  const newParagraph = document.createElement('p');

  //create the text content for the paragraph
  const newContent = document.createTextNode('This is the new paragraph inside the new section!');

  // Add the content/text to the newly created paragraph
  newParagraph.appendChild(newContent);

  // add paragraph to the section
  newSection.appendChild(newParagraph);

  // find the existing section element
  const existingSection = document.querySelector('section.highlight-paragraph');

  // insert the new section after the existing section
  existingSection.insertAdjacentElement('afterend', newSection);
}