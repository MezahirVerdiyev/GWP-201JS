
let additionButton = document.getElementById("addition")
let substrakButton = document.getElementById("substrak")
let multiplyButton = document.getElementById("multiply")
let divisionButton = document.getElementById("division")
let resetButton = document.querySelector(".reset");
let input1 = document.getElementById("input21");
let input2 = document.getElementById("input22");
let result = document.getElementById("value1");


additionButton.addEventListener("click", function () {
   result.innerText = parseInt(input1.value) + parseInt(input2.value)
  if(input1.value===""||input2.value===""){
   result.innerText="0"
   alert("Hello World")
  }
});

substrakButton.addEventListener("click", function () {
   result.innerText = parseInt(input1.value) - parseInt(input2.value)
   if(input1.value===""||input2.value===""){
      result.innerText="0"
      alert("Hello World")
     }
});

multiplyButton.addEventListener("click", function () {
   result.innerText = parseInt(input1.value) * parseInt(input2.value)
   if(input1.value===""||input2.value===""){
      result.innerText="0"
      alert("Hello World")
     }
});

divisionButton.addEventListener("click", function () {
   result.innerText = parseInt(input1.value) / parseInt(input2.value)
   if(input1.value===""||input2.value===""){
      result.innerText="0"
      alert("Hello")
     }
})
resetButton.addEventListener("click", function () {
   input1.value = "";
   input2.value = "";
   result.innerText = "0";
});


