// EXERCICE 2 : Users And Style
let div = document.querySelector('div');

// Add a “light blue” background color and some padding to the <div>.
div.style.backgroundColor = 'light blue';
div.style.padding = '20px';

// Do not display the <li> that contains the text node “John”.
let firstLi = document.querySelector('li');
firstLi.style.display = 'none';

// Add a border to the <li> that contains the text node “Pete”.
let secondLi = document.querySelectorAll('li')[1];
secondLi.style.border = '1px solid black';

// Change the font size of the whole body.s
document.body.style.fontSize = '30px';

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” 
//(x and y are the users in the div).
if (div.style.backgroundColor === 'light blue') {
    alert(`Hello ${firstLi.textContent} and ${secondLi.textContent}`);
}