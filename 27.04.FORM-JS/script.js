let Name1 = document.querySelector("#Name")
let Surname1 = document.querySelector("#Surname")
let Eamil1 = document.querySelector("#Eamil")
let Password1 = document.querySelector("#Password")
let checkbox = document.querySelector("#checkbox")
let radio1 = document.querySelector("#radio1")
let submit = document.querySelector("#submit")
let check1 = document.querySelector("#check")


Name1.addEventListener("focus", () =>{
    Name1.style.background = "red"
})
Name1.addEventListener("mouseout",()=>{
    Name1.style.background=""
})


Surname1.addEventListener("mousemove", () =>{
    Surname1.style.background = "grey"
  
})
Surname1.addEventListener("mouseout",()=>{
    Surname1.style.background=""
})


Eamil1.addEventListener("contextmenu", () =>{
    Eamil1.style.background = "green"
 
})
Eamil1.addEventListener("mouseout",()=>{
    Eamil1.style.background=""
})

Password1.addEventListener("focus", () =>{
    Password1.style.background = "blue"
  
})
Password1.addEventListener("mouseout",()=>{
    Password1.style.background=""
})



Name1.addEventListener("change",()=>{
    if(Surname1.value&&Name1.value&&checkbox.checked){
        submit.removeAttribute("disabled")
    }else{
        submit.disabled=true
    }
})
Surname1.addEventListener("change",()=>{
    if(Surname1.value&&Name1.value&&checkbox.checked){
        submit.removeAttribute("disabled")
    }else{
        submit.disabled=true
    }
})
checkbox.addEventListener("change",()=>{
    if(Surname1.value&&Name1.value&&checkbox.checked){
        submit.removeAttribute("disabled")
    }else{
        submit.disabled=true
    }
})

checkbox.addEventListener('click', () => {
    if (checkBox.checked) {
        check1.style.visibility = 'visible'
    } else {
        check1.style.visibility = 'hidden'
    }
})




