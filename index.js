const mainNode = document.querySelector('main#main');
mainNode.remove();
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
const yourName = "Seba";
newHeader.textContent = "${Seba} is the champion";
console.log(newHeader.textContent);
document.body.appendChild(newHeader);