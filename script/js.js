// Declare an array (notesArray) in your JS code with JS note objects in this format: {title:"note one", body:"this is my first note"}. 
// Make sure this variable is declared outside of any function.
let notesArray = [{title:"note one", body:"this is my first note"}]


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


// If the textarea, save and cancel buttons are hidden, 
// pressing "New Note" button would make them visible. After that pressing “New Note” again should clear the text area.
const newnotes = document.querySelector(".new_note")

function newnote(){
    if (document.querySelector("textarea").hidden, document.querySelector(".cancel").hidden, document.querySelector(".save").hidden  === true){
        document.querySelector("textarea").hidden = false;
        document.querySelector(".cancel").hidden = false;
        document.querySelector(".save").hidden = false;
    } else {
            document.querySelector("textarea").value = " "
    }
}
newnotes.addEventListener("click", newnote);




// When the user types something in the textarea and clicks the “save” button (4 points)
// Show a prompt to the user and ask for the title of the note they want to save
// Add a new JS object to the notesArray with the provided title and the text in the text area as the body
// Add a list item to the sidebar with the title of the JS object you just added to the array