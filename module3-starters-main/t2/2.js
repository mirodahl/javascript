"use strict"
const targetElement = document.querySelector('#target');       // get element named target

const list1 = document.createElement("li") //creating list-elements
const list2 = document.createElement("li") //creating list-elements
const list3 = document.createElement("li") //creating list-elements

//li.innerHTML = 'First item'//helpompi tapa

//luodaan listaan tulevat asiat
const text1 = document.createTextNode("First item")
const text2 = document.createTextNode("Second item")
const text3 = document.createTextNode("Third item")

//lisätään asiat list-elementtiin
list1.appendChild(text1)
list2.appendChild(text2)
list3.appendChild(text3)

//luodaan näytettävä lista
targetElement.appendChild(list1)
targetElement.appendChild(list2)
targetElement.appendChild(list3)