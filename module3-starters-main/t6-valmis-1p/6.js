//Open t6-valmis-1p folder in your IDE/editor.
// Make a script that opens an alert window that says 'Button Clicked' when the <button> element is clicked. (1p)
'use strict'
const buttonAlerter = document.getElementById("butbut")

buttonAlerter.addEventListener("click", () => {
  alert("Button Clicked")
})