let ulElement = document.createElement('ul')


let fragment = new DocumentFragment();
let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio']

    for(let i = 0; i<cities.length; i++){
        let liElement = document.createElement('li')
        liElement.append(cities[i]);
        fragment.append(liElement)
        let attrNode = document.createAttribute('class')
        attrNode.value = 'city'
        liElement.setAttributeNode(attrNode)
    }
ulElement.appendChild(fragment)

console.log(ulElement)

document.body.appendChild(ulElement)
