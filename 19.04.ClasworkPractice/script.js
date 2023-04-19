// function reversestring(str) {
//     return str.split("").reverse("").join("")
    
// }console.log(reversestring("hello"))  //olleh



// function ispolidrom(str) {
//     if(str===str.split("").reverse().join("")){
//         return `${str} is polidrom`
//     }
//     else{
//         return `${str} is no polidrom`
//     }
// }
// console.log(ispolidrom("refer"));//refer is polidrom



// let arr=[1,2,2,2,4,3,3,2,4,7,5,7,6]

// //1)
// function removeDublicates(array){
// return array.filter((el,index)=>array.indexOf(el)===index)
// }console.log(removeDublicates(arr)) //(7) [1, 2, 4, 3, 7, 5, 6]

// //2)
// function removeDublicates(array){
//     return[...new Set(array)]
// }console.log(removeDublicates(arr));  //(7) [1, 2, 4, 3, 7, 5, 6]



// function generateOtp(arr) {
//     let arr1="0123456789"
//     let otp=""
//     for(let i=0;i<4;i++){
//         otp+=arr1[Math.floor(Math.random()*10)]
//     }return otp;
// }console.log(generateOtp())  //9158


