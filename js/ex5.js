/*
   Exercise 5 JavaScript code
*/

const addTable = () => {
  let div = document.getElementById("output");
  let table = document.createElement("table");
  div.appendChild(table);
  table.style.border = "1px solid black";
  for (let i = 1; i <= 12; i++) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let text = document.createTextNode(i);
    table.appendChild(tr);
    tr.appendChild(td);
    td.appendChild(text);
    if (i % 4 === 0) {
      tr.style.backgroundColor = "lightblue";
    }
    td.style.border = "1px solid black";
    tr.style.textAlign = "center";
  }
}
addTable();
