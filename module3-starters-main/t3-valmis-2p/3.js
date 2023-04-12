'use strict';
//Open t3-valmis-2p folder in your IDE/editor. Add HTML by using innerHTML property. (2p)
// Add the following HTML code to the element with id="target".
//<li>John</li>
// <li>Paul</li>
// <li>Jones</li>
// Add the values from 'names' array to the <li> elements in a for-loop.
let names = ['John', 'Paul', 'Jones'];
let targetElement = document.getElementById("target")

//lisätään html-koodi
targetElement.innerHTML = `
    <li>John</li>
    <li>Paul</li>
    <li>Jones</li>  
    `
for (let i = 0; i < names.length; i++) {
    let text = names[i];

      let listItem = document.createElement("LI");
      listItem.textContent = text;
      targetElement.appendChild(listItem);
console.log()
  }
