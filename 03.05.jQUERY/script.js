// const colors = ["red", "green", "blue", "yellow", "brown"]

// ///1
// $(".reng").click(function () {
//     $(".text").css({ color: colors[Math.floor(Math.random() * colors.length)] })
// })


// ///2 
// $(".hidebtn").click(function(){
//     $(".text").hide();
// })
// $(".showbtn").click(function(){
//     $(".text").show();
// })

// ///3

// $.each(colors,function(index,value){
//     console.log(value);
// })

// ///4
// const numbers=[4,2,false,null,"false",NaN,undefined,8,true,"9"]
// let sum=0;
// $.map(numbers,(value,index)=>{
//     if(value){
//         sum+=index
//     }
// })
// console.log(sum);




















////////////////////////////////////ALQORITM
//1

// function capitalizeFirst(str) {
//     return str.split(" ").map((adi) => adi.charAt(0).toUpperCase() + adi.slice(1)).join(" ");
// }
// console.log(capitalizeFirst("This is a tittle"));


//2


// function encoded(str) {
//     // return str.split(" ").map((ad) => (ad.length > 4 ? ad.replace(/[a-z, A-Z]/g, "*") : ad)).join(" ");
    
// }
// console.log(encoded("The code is fourty")) // The code is ******
//     // console.log(encoded("Two plus three is fiva"))
//     // console.log(encoded("The code is fourty"))
 