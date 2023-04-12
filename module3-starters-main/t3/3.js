'use strict';
//Open t3 folder in your IDE/editor. Add HTML by using innerHTML property. (2p)
// Add the following HTML code to the element with id="target".
//<li>John</li>
// <li>Paul</li>
// <li>Jones</li>
// Add the values from 'names' array to the <li> elements in a for-loop.
const names = ['John', 'Paul', 'Jones'];
const targetElement = document.getElementById("target")

//lisätään html-koodi
targetElement.innerHTML = `
    <li>John</li>
    <li>Paul</li>
    <li>Jones</li>  
    `
for (let i = 0; names.length; i++) {
  targetElement.push({names});
}
