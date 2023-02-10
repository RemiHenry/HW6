/*
   Exercise 7 JavaScript code
*/

const displayError = (number1, number2) => {
   let div = document.getElementById("content");
   let span1 = document.createElement("span");
   let span2 = document.createElement("span");
   let errorText = document.createTextNode("Error!");
   let text = document.createTextNode(` You must enter integers. You entered \"${number1}\" and \"${number2}\". Try again.`);
   div.appendChild(span1);
   div.appendChild(span2);
   span1.appendChild(errorText);
   span2.appendChild(text);
   span1.style.color = "red";
   span1.style.fontWeight = "bold";
}

const dysplaySum = (number1, number2) => {
   let sum = Number(number1) + Number(number2);
   let div = document.getElementById("content");
   let span1 = document.createElement("span");
   let span2 = document.createElement("span");
   let text = document.createTextNode(`${number1} + ${number2} = `);
   let sumText = document.createTextNode(sum);
   div.appendChild(span1);
   div.appendChild(span2);
   span1.appendChild(text);
   span2.appendChild(sumText);
   span2.style.color = "red";
   span2.style.fontWeight = "bold";
}

const sumOfInteger = () => {
   let number1 = prompt("Enter the first number:");
   let number2 = prompt("Enter the second number:");
   if (!Number.isInteger(Number(number1)) || !Number.isInteger(Number(number2))) {
      displayError(number1, number2);
   } else {
      dysplaySum(number1, number2);
   }
}
sumOfInteger();