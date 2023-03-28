// Text on the button should be updated to “Light Theme”.
// Pressing the “Light Theme” button would reverse all the changes. (3 points)



const darkmodebutton = document.querySelector('.dark_theme')

function darkmode(){
    var body = document.querySelector("body")
    var main = document.querySelector("main")
    var footer = document.querySelector("footer")
    var nav = document.querySelector("nav")
    var header = document.querySelector("header")
    var aside = document.querySelector("aside")

    body.classList.toggle("dark_mode");
    main.classList.toggle("dark_mode");
    footer.classList.toggle("dark_mode");
    nav.classList.toggle("dark_mode");
    header.classList.toggle("dark_mode");
    aside.classList.toggle("dark_mode");
    darkmodebutton.textContent === "light theme";
}
darkmodebutton.addEventListener("click", darkmode);




// Clicking the “cancel” button should hide the text area, save, and cancel buttons.

const cancelbutton = document.querySelector(".cancel")

function cancelfeature(){
    document.querySelector("textarea").hidden = true;
    document.querySelector(".cancel").hidden = true;
    document.querySelector(".save").hidden = true;
}
cancelbutton.addEventListener("click", cancelfeature);
