/* 
Homework 3/14/2023 -> Due Tomorrow

Make a function that will dynamically create an html heading tag.
 - NOTE: Valid headings are only 1-6
input: size, text
output: HTMLH<whatever>Element {}

Then, make a render function that will an element, and append it in a particular location on the dom.
input: el, parentEl (what element do we append to?)
output: renders element on screen. void


*/

const headerSize = prompt("Enter a number between 1-6 (press enter to quit)\n");

const headerText = prompt("Enter what you would like your header to say");

function dynamicHeaderCreator(size, text) {
  const newHeader = document.createElement(`h${size}`);
  const headerText = document.createTextNode(text);

  newHeader.appendChild(headerText);

  return newHeader;
}

function headerRender(header) {
  const grabDiv = document.querySelector(".content-wrapper");
  grabDiv.appendChild(header);
}

headerRender(dynamicHeaderCreator(headerSize, headerText));

// how ryan showed us

function createHeading(size, text) {
  const heading = document.createElement(`h${size}`);
  const headingText = document.createTextNode(text);

  heading.appendChild(headingText);

  return heading;
}

function render(el, parentEl) {
  parentEl.appendChild(el);
}

const mainHeading = createHeading(1, "Howdy duders");
const root = document.getElementById("root");

render(mainHeading, root);
