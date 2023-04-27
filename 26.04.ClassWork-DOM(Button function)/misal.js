const div = document.createElement("div")
const start=document.createElement("button")
const saniye=document.createElement("p")

const form=document.createElement("form")
const Name=document.createElement("label")
const surname=document.createElement("label")
const Namearea=document.createElement("input")
const surnamearea=document.createElement("input")
const checkbox=document.createElement("input")
const radio1=document.createElement("input")
const radio2=document.createElement("input")
const submit=document.createElement("button")
const next=document.createElement("button")


let count=15
let interval;

document.body.append(div);

div.append(start)
div.append(saniye)

document.body.append(form)

form.append(Name)
form.append(Namearea)
form.append(surname)
form.append(surnamearea)
form.append(checkbox)
form.append(radio1)
form.append(radio2)
form.append(submit)

document.body.append(next);


Namearea.setAttribute("required","")
surnamearea.setAttribute("required","")
checkbox.setAttribute("type","checkbox")
checkbox.setAttribute("required"," ")

radio1.setAttribute("type","radio")
radio1.setAttribute("required","")
radio1.setAttribute("name","a")

radio2.setAttribute("type","radio")
radio2.setAttribute("required","")
radio2.setAttribute("name","a")

submit.setAttribute("type","submit")
submit.setAttribute("disabled","true")


submit.innerText="Submit"
start.innerText="Lets start"
saniye.innerText=`00:${count}`;
Name.innerText="Name"
surname.innerText="Surname"

next.innerText="Next Page >"

saniye.style.border="1px solid"
saniye.style.width="40px"
form.style.height="100vh"
form.style.display="flex"
form.style.alignItems="center"
form.style.justifyContent="center"
form.style.flexDirection="column"
form.style.border="1px dashed #000"

checkbox.style.accentColor="red"
radio1.style.accentColor="red"
radio2.style.accentColor="red"

saniye.style.color="blue"

start.addEventListener("click",function(){
    submit.removeAttribute("disabled");
    next.setAttribute("disabled","1")
    clearInterval(interval);
    this.setAttribute("disabled","true");
    interval=setInterval(()=>{
        count--;
        if(count===-1){
            clearInterval(interval);
            saniye.innerText="You missed";
            return;
        }if(count<15 || count>9){
            saniye.style.color="black";
        }
        
        if(count<10){
            saniye.style.color="red";
        }
        saniye.innerText=`00:${count}`;
    },1000);
})

next.addEventListener("click",function(){
    alert("Finished")
})