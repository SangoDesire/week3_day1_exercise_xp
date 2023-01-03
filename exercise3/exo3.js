// Add the code above, to your HTML file
//In the <div>, change the value of the id attribute from navBar 
//to socialNetworkNavigation, using the setAttribute method.
let div = document.querySelector('#navBar');

// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation,
//using the setAttribute method
div.setAttribute('id', 'socialNetworkNavigation');

// First, create a new <li> tag (use the createElement method).
let newLi = document.createElement('li');

// Create a new text node with “Logout” as its specified text.
let newTextNode = document.createTextNode('Logout');

// Append the text node to the newly created list node (<li>)
newLi.appendChild(newTextNode);

// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
let ul = document.querySelector('ul');
ul.appendChild(newLi);

// Bonus
//Use the firstElementChild and the lastElementChild properties to retrieve the first 
//and last < li > elements from their parent element( < ul > ).Display the text of each 
//link.(Hint: use the textContent property).
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;
console.log(firstLi.textContent); // show profile "Profile"
console.log(lastLi.textContent); // show "Log out"