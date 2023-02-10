/*
   Exercise 4 JavaScript code
*/

const addLink = () => {
  let ul = document.getElementById("links");
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.href = "https://www.csulb.edu/college-of-business";
  a.text = "College of Business";
  li.appendChild(a);
  ul.insertBefore(li, ul.childNodes[2]);
}
addLink();
