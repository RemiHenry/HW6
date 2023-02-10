/*
   Exercise 2 JavaScript code
*/

const displayText400 = () => {
  let nodes = document.body.childNodes;
  for (const element of nodes) {
    for (const child of element.childNodes) {
      if (child.className === "400level") {
        console.log(child.textContent);
      }
    }
  }
}

displayText400();