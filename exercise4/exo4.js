//EXERCISE 4 : My Book List
//In the body of the HTML page, create an empty div:
//<div class = "listBooks" > < /div>

//In the js file, create an array called allBooks. This is an array of objects.
//Each object is a book that has 4 keys(ie.4 properties):
allBooks = [
        { title, author, Image: url, alreadyRead: true },

    ]
    //Initiate the array with 2 books of your choice
    //(ie.Add manually 2 books objects in the array))
allBooks = [{ title: "petitBodiel", author: "HampatéBa", Image: url, alreadyRead: true },
    { title: "avantureAmbiguê", author: "CheckAmidou", Image: url, alreadyRead: false }
]

//Requirements : All the instructions below need to be coded in the js file:
//Using the DOM, render the books inside an HTML table(the HTML table must
// be added to the < div > created in part 1).
//You have to display the book’s title and the book’s author.
let show = document.getElementsByClassName("listBooks")[0];
let table = document.createElement("table")
for (let x in allBooks) {
    let tr = document.createElement("tr")
    let td = document.createElement("td")
    let td2 = document.createElement("td")
    td.innerHTML = x.title + " écrit par " + x.author;
    //The width of the image has to be set to 100px
    td.innerHTML = '<img scr="' + x.Image + '" width="100px">'
        //If the book is already read. Set the color of the book’s details to red.
    if (x.alreadyRead) {
        td.style.color = "red";

    }
    tr.appendChild(td);
    tr.appendChild(td2);
    table.appendChild(tr);

}

show.appendChild(table)