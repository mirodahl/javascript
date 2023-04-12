'use strict'
		function calculate() {

      let num1 = document.getElementById("num1");
      console.log(num1)
      let num2 = document.getElementById("num2");
      console.log(num2)
      let result = document.getElementById("result");
      console.log(result)

      if (document.getElementById("operation").value === "add") {
        result = num1 + num2;
        console.log(result)
        return result;
      } else if (document.getElementById("operation").value === "sub") {
        result = num1 - num2;
        console.log(result)
        return result;
      } else if (document.getElementById("operation").value === "multi") {
        result = num1 * num2;
        console.log(result)
        return result;
      } else if (document.getElementById("operation").value === "div") {
        result = num1 / num2;
        console.log(result)
        return result;
      }

    }