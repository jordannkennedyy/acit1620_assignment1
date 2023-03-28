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
darkmodebutton.addEventListener("click", darkmode)


// When the “Dark Theme” button is clicked,
// Background colors should change to darker colors (use 2 different colors for the left and right parts)
// Text colors on darker backgrounds should be updated to have good contrast
// Use toggling class properties to achieve the two previous changes
// Don't add css code in JS (don't use .style property)
// Text on the button should be updated to “Light Theme”.
// Pressing the “Light Theme” button would reverse all the changes. (3 points)
