const body = document.querySelector("body")
body.style.padding = "2rem 3rem"


// Dark Mode
const heading = document.createElement("h1")
heading.textContent = "DOM Mini Tasks"

const darkMode = document.createElement("button")
darkMode.textContent = "Toggle Dark Mode"
darkMode.style.display = "block"
darkMode.style.fontSize = "2rem"
darkMode.style.padding = "2rem"
darkMode.style.border ="1px solid black"

function darkMOdeChange(){

    darkMode.addEventListener("click", ()=>{
       
        if(darkMode.textContent == "Toggle Dark Mode"){
                body.style.backgroundColor = "black"
                body.style.color = "white"
                darkMode.textContent = "Toggle light Mode"
             
        } else{
            body.style.backgroundColor = "white"
            body.style.color = "black"
            darkMode.textContent = "Toggle Dark Mode"
        }

    })

}

darkMOdeChange()


//  Change color according to the button

const blue = document.createElement("button")
blue.textContent = "Blue"
blue.style.marginTop = "2em"
blue.style.padding = "2rem"
blue.style.fontSize = "2rem"
blue.style.borderRadius = "1em"
blue.style.marginLeft = "2rem"
blue.style.backgroundColor = "lightblue"

blue.addEventListener("click", ()=>{
    body.style.backgroundColor = "lightblue"
})
blue.addEventListener("dblclick", ()=>{
    body.style.backgroundColor = "white"
})

const Green = document.createElement("button")
Green.textContent = "green"
blue.style.marginTop = "2em"
Green.style.padding = "2rem"
Green.style.fontSize = "2rem"
Green.style.borderRadius = "1em"
Green.style.marginLeft = "2rem"
Green.style.backgroundColor = "green"
Green.addEventListener("click", ()=>{
    body.style.backgroundColor = "lightgreen"
})

const pink = document.createElement("button")
pink.textContent = "pink"
pink.style.marginTop = "2em"
pink.style.padding = "2rem"
pink.style.fontSize = "2rem"
pink.style.borderRadius = "1em"
pink.style.marginLeft = "2rem"
pink.style.backgroundColor = "pink"
pink.addEventListener("click", ()=>{
    body.style.backgroundColor = "lightpink"
})



// change text

const text1 = document.createElement("p")
text1.innerHTML = "<h1> Click the button to change this text </h1>"

const button1 = document.createElement("button")
button1.textContent = "Change text"
button1.style.backgroundColor = "white"
button1.style.borderRadius = "1rem"
button1.style.padding = "1rem"
button1.style.fontSize ="1rem"


button1.addEventListener("click", ()=>{
    text1.innerHTML = "<h1>Text has been changed!</h1>"
})



// show/ hide text 

const text2 = document.createElement("p")
text2.classList.add("show")
text2.innerHTML = "<h3> This is a paragraph. Click the button to hide/show me!</h3>"

const button2 = document.createElement("button")
button2.textContent = "Show/Hide Pragraph"
button2.style.padding = "1em"
button2.style.borderRadius = "1rem"
button2.style.fontSize ="1rem"

button2.addEventListener("click", ()=>{
    if(text2.classList.contains("show")){
        text2.style.visibility ="hidden"
        text2.classList.remove("show")
    } else{
        text2.style.visibility ="visible"
        text2.classList.add("show")
    }
})


// add items

const text3  = document.createElement("h1")
text3.textContent = "Add Item to list :"

const input  = document.createElement("input")
input.placeholder = "Enter your item"
input.style.padding = "1em"
input.style.marginRight = "2rem"

const button3 = document.createElement("button")
button3.textContent = "Add Item"
button3.style.padding = "1em"
button3.style.borderRadius = "1rem"
button3.style.fontSize ="1rem"



const list = document.createElement("ol")




button3.addEventListener("click", ()=>{

    if (input.value.trim() !== "") {
        const li = document.createElement("li")
        li.textContent = input.value;
        list.appendChild(li);
        input.value = ""
       
    }

})

input.addEventListener("keyup", (e)=>{
    if(e.key === "Enter" && input.value.trim()!== ""){
        const li = document.createElement("li")
        li.textContent = input.value;
        list.appendChild(li);
        input.value = ""  
    }
})



document.body.append(
    heading, darkMode, 
    blue, Green, pink, 
    text1, button1,
     text2, button2, 
     text3, input, button3,list
    )





