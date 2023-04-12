"use strict"
//usein html: tag, javascript: element
const targetElement = document.getElementById("target") //haetaan haluttu html-osa
//löytyykä elementti?
if (targetElement != null) {
  console.log("Element found")
} else {
  console.log("404 **heavy sobbing**")
}
//lisätään html-koodi
targetElement.innerHTML = `
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>  
    `
//lisätään css-luokkamääritys my-list
targetElement.classList.add("my-list")