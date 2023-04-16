// // ARRAY METHODS

//////////////////////1

// arr1.push(...items)      Maddələri sonuna əlavə 
// arr1.pop()               1 elementi sonundan çıxarır 
// arr1.shift()             1 elementi əvvəlindən çıxarır
// arr1.unshift(...items)   Əvvəldən elementlər əlavə edir



///////////////////////2

//splice 

let arr = ["I", "Java", "study"]

console.log(arr.splice(1, 1))  //["Java"] >>>>> 1-cidən başliyib 1 element silir.




//slice

let arr1 = ["t", "e", 's', 't']
console.log(arr1.slice(1, 3)) //  ['e', 's'] >>>> 1-cidən 3 ə qədər saxlıyır.



// concat

let arr2 = [1, 2]
let arr3 = [3, 4]
console.log(arr2.concat(arr3))  // [1, 2, 3, 4] >>>>>> arr2 -nin sonuna arr3-u copyaladı.



//forEach---massivin hər bir elementi üçün funksiyanı işə salmağa imkan verirş




// indexOf

let arr4 = [1, 0, "false"]
console.log(arr4.indexOf(1)) //  0
console.log(arr4.indexOf(0)) //  1
console.log(arr4.indexOf(2)) //  -1


// find   //findIndex--- element qaytarir və indexini qaytarir

let users = [
    { id: 1, name: "john" },
    { id: 2, name: "Pete" },
    { id: 3, name: "mary" }
]
let user = users.find(item => item.id == 1)
console.log(user.name)                        //john

console.log(users.findIndex(user=>user.name=="john"))   //0



//filtr---bir neçə element qaytarır
console.log(users.filter(item=>item.id<3))   //  (2) [{…}, {…}]







