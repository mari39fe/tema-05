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

let personer = [];
let filter = "alle";

document.addEventListener("DOMContentLoaded", start);


function start() {

    let destination = document.querySelector("#liste");

    hentJson();



    async function hentJson() {

        let jsonData = await fetch("menu.json");
        console.log(jsonData);
        personer = await jsonData.json();
        console.log(personer);

        derSkalVæreEnFunktion();

    }


    function derSkalVæreEnFunktion() {
        destination.innerHTML = ""
        personer.forEach(person => {
            if (filter == "all" || person.kategori == filter) {
                let template = `<div id="box"><div id="box_tekst"><h2>${person.titel}</h2> <p>${person.beskrivelse}</p><p>€ ${person.pris}</p></div><div id="box_billede"><img src=menu/${person.billede}></div></div>`;

                destination.insertAdjacentHTML("beforeend", template);

                destination.lastElementChild.addEventListener("click", () => {
                    visSingle(person);
                });

                function visSingle(person) {
                    document.querySelector("#indhold").innerHTML = `<div id="box"><div id="box_tekst"><h2>${person.titel}</h2> <p>${person.beskrivelse}</p><p>€ ${person.pris}</p></div><div id="box_billede"><img src=menu/${person.billede}></div></div>`;

                    document.querySelector("#popup").style.display = "block";
                    document.querySelector("#popup #luk").addEventListener("click", close);

                }

                function close() {
                    document.querySelector("#popup").style.display = "none";
                }

            }
        })


    }

    document.querySelectorAll(".filter").forEach(elm => {
        elm.addEventListener("click", filtrering);
    })

    function filtrering() {
        filter = this.getAttribute("data-hold");
        document.querySelector("h3").textContent = this.textContent;
        document.querySelectorAll(".filter").forEach(elm => {
            elm.classList.remove("valgt");
        })
        this.classList.add("valgt");

        derSkalVæreEnFunktion();
    }

}
