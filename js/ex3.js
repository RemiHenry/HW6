/*
   Exercise 3 JavaScript code
*/

function changeParagraphs() {
  let paragraphs = document.getElementsByTagName("p");
  for (const element of paragraphs) {
    element.style.fontWeight = "bold";
    element.style.backgroundColor = "yellow";
  }
}
changeParagraphs();