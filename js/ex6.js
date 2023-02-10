/*
   Exercise 6 JavaScript code
*/

const words = [{
   term: "Procrastination",
   definition: "Avoidance of doing a task that needs to be accomplished"
}, {
   term: "Tautology",
   definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
   term: "Oxymoron",
   definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

const addDefinitionList = () => {
   let div = document.getElementById("content");
   let dl = document.createElement("dl");
   div.appendChild(dl);
   for (const element of words) {
      let dt = document.createElement("dt");
      let dd = document.createElement("dd");
      let strong = document.createElement("strong");
      let term = document.createTextNode(element.term);
      let definition = document.createTextNode(element.definition);
      dl.appendChild(strong);
      strong.appendChild(dt);
      dl.appendChild(dd);
      dt.appendChild(term);
      dd.appendChild(definition);
   }
}
addDefinitionList();