/////////HER STARTER BURGERMENUEN ////////////////////////////////

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

/*document.querySelector("#burgermenu").addEventListener("click", burgerMenu);

function burgerMenu() {
    let x = document.querySelector("#myTopnav");
    if (!().className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}*/


let box = document.querySelector(".dropdownbox");
let ikon = document.querySelector(".ikon");

ikon.addEventListener("click", function () {

    if (!(box.style.display == "block")) {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }

})

// HER STARTER MENUEN MED GRID OG JSON

let menu = [];
let filter = "pizza";

document.addEventListener("DOMContentLoaded", start);


function start() {

    let destination = document.querySelector("#liste");

    hentJson();



    async function hentJson() {

        let jsonData = await fetch("menu.json");
        console.log(jsonData);
        personer = await jsonData.json();
        console.log(menu);

    })
derSkalVæreEnFunktion();

}


function derSkalVæreEnFunktion() {
    destination.innerHTML = ""
    menu.forEach(menuItem => {
        if (filter == "pizza" || menuItem.kategori == filter) {
            destination.innerHTML += `<div id="box"><h2>${menuItem.titel}</h2> <img src=${menuItem.billede}><p>${menuItem.beskrivelse}</p><p>${menuItem.pris}</p></div>`
        }
    })




}

document.querySelectorAll(".filter").forEach(elm => {
    elm.addEventListener("click", filtrering);
})

function filtrering() {
    filter = this.getAttribute("data-hold");
    document.querySelector("h1").textContent = this.textContent;
    document.querySelectorAll(".filter").forEach(elm => {
        elm.classList.remove("valgt");
    })
    this.classList.add("valgt");

    derSkalVæreEnFunktion();
}

}
