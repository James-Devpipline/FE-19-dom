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

  const grabDiv = document.querySelector(".content-wrapper");
  console.log(newHeader);
}

dynamicHeaderCreator(headerSize, headerText);
