// Exercise 1 : Users
//Retrieve the div and console.log it
let container = document.getElementById("container");
console.log(container);
//Change the name “Pete” to “Richard”.
let list = document.getElementsByTagName("li")
list[1].innerHTML = "Richard";

//Change each first name of the two <ul>'s to your name.
list[0].innerHTML = "Désiré";
list[2].innerHTML = "Désiré";

//Delete the <li> that contains the text node “Sarah”.

for (let del of list) {
    if (del.innerHTML == "Sarah") {
        del.closest("ul").removeChild(del)

    }


}