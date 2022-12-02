let button = document.createElement("button");
// let id = document.createAttribute("id")
button.textContent = "Add item"
button.setAttribute("id", "btn")
// id.value = "btn"
// button.setAttributeNode(id)
document.body.appendChild(button)

let ulElement = document.createElement("ul");
let attrNode = document.createAttribute("id");
attrNode.value = "items";
document.body.appendChild(ulElement)

function getListContent() {
  let countListElements = document.getElementsByClassName("item").length;
  console.log(countListElements);
  let liElement = document.createElement("li");
  let attrNode1 = document.createAttribute("class");
  attrNode1.value = "item";
  liElement.setAttributeNode(attrNode1);
  liElement.textContent = `item ${countListElements + 1}`;
  ulElement.appendChild(liElement);
}

// getListContent();

document.getElementById("btn").addEventListener("click", getListContent);



console.log(ulElement);
