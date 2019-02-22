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
