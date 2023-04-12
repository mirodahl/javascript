'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const targetElement = document.querySelector('#target');       // get element named target

for (let i = 0; i < students.length; i++) {

      let text = students[i].name;
      let stud = document.createElement("option");
      stud.textContent = text;
      targetElement.appendChild(stud);
  }