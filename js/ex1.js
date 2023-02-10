/*
   Exercise 1 JavaScript code
*/

const bodyNodes = () => {
  let nodes = document.body.childNodes;
  for (const element of nodes) {
    console.log(element);
  }
}
bodyNodes();