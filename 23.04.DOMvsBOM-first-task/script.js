let startbtn=document.querySelector(".start")
let stopbtn=document.querySelector(".stop")
let result=document.querySelector("#result")
let resetbtn=document.querySelector(".reset")
let Incrementbtn=document.querySelector(".Increment")
let Decrementbtn=document.querySelector(".Decrement")
let count=0
let interval;


startbtn.addEventListener("click",function(){
    clearInterval(interval)
    this.setAttribute("disabled","")
    stopbtn.removeAttribute("disabled")
    interval=setInterval(()=>{
count++
result.innerText=count
   },1000)
})


stopbtn.addEventListener("click",function(){
    clearInterval(interval)
    startbtn.removeAttribute("disabled")
    this.setAttribute("disabled","")
})

resetbtn.addEventListener("click",function(){
    count=0
    result.innerText=count
    clearInterval(interval)
    stopbtn.removeAttribute("disabled")
    startbtn.removeAttribute("disabled")
})
Decrementbtn.addEventListener("click",function(){
    result.innerText=--count
})
Incrementbtn.addEventListener("click",function(){
    result.innerText=++count
})

