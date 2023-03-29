// Declare an array (notesArray) in your JS code with JS note objects in this format: {title:"note one", body:"this is my first note"}. 
// Make sure this variable is declared outside of any function.
const notesArray = [{title:"note one", body:"this is my first note"}]


// Text on the button should be updated to “Light Theme”.
// Pressing the “Light Theme” button would reverse all the changes. (3 points)
let darkmodebutton = document.querySelector('.dark_theme')

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
    if (darkmodebutton.textContent == "Dark Theme"){
        darkmodebutton.textContent = "Light Theme"
    } else {
        darkmodebutton.textContent = "Dark Theme"
    }
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
const saved = document.querySelector(".save")
function save(){
    let user_input = prompt("What is the title of your new note?:")
    var textarea = document.getElementById("textarea").value
    var creation = Object.create(notesArray);
    creation.title = user_input
    creation.body = textarea
    notesArray.push(creation)
    const li = document.createElement("li")
    var asidearea = document.querySelector("ul")
    li.textContent = user_input
    asidearea.appendChild(li)
}
saved.addEventListener("click", save);


// When any of the list items on the sidebar (including the default note one and note two added in the html) 
// are clicked, you should search through notesArray and find the JS object with 
// its title property equal to the text of the clicked item. Then display the value of its body property in the text area. 

const searchnow = document.querySelector("aside")
function search(event){
    if(event.target.tagName == "LI"){
        let select = event.target.textContent;
            for(i= 0; i < notesArray.length; i++){
                if(notesArray[i].title == select){
                    console.log(notesArray[i].body)
             }
        }
    }
}
searchnow.addEventListener("click", search);


//let searching = notesArray.find(note => note.title === select);
//console.log(searching);