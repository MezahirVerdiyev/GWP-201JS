// 1. Massiv metodu////////////////////////////////////////// ////////////////////////////////////////////////////////// ///////////////
//  const arr = ['d', 7, '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1, null]
//1.1 Splice 'arr' //  [7, '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1]
//  console.log(arr.splice(1,arr.length-2))





// 1.2 Show only last three values of 'arr' // [ false, 1, null]

// console.log(arr.splice(arr.length-3))


// 1.3 Concat [true,'8','myName'] in front of the 'arr'. //[true,'8','myName','d', 7 '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1, null]
// let myName=[true,"8","myName"]
// console.log(myName.concat(arr))


// 1.4 Find second 7's index. //4
// console.log(arr.indexOf(7,2))


// 1.5 Filter only true value // ['d', 7, '1', '7', 7, 'c', 'a', 7, '3', 1]
// function filterArray1(arr) {
//     return arr.filter(el => typeof el === 'string')
// }
// console.log(filterArray1(arr))


// 1.6 Sum only integer values of 'arr' //22

// function filterArray1(arr) {
//     return arr.filter(el => typeof el === 'number').reduce((sum,curr)=>sum+curr,0)
// }
// console.log(filterArray1(arr))


// 1.7 Find falsy values' length //4

// console.log(arr.filter(el=>!el).length)

// 2.Obyekt vs Massiv///////////////////////////////////////// ////////////////////////////////////////////////////////// //////////////
// 2.1 Obyektin minimum dəyərini tapan 'findSmallest(inks)' adlı funksiya yaradın.


// console.log(findSmallest({
// "siyan": 23,
// "magenta": 12,
// "sarı": 10
// })); // 10

// console.log(findSmallest({
//     "cyan": 432,
//     "magenta": 543,
//     "yellow": 777
// }));  // 432

// console.log(findSmallest({
//     "cyan": 700,
//     "magenta": 700,
//     "yellow": 0
// })); // 0

//Helli
//1)
// function findSmallest(Obj) {
//     let arrays=Object.values(Obj)
//     let adin=Math.min(...arrays)
//     return adin
// }

 //2)
// function findSmallest(obj) {
//     return Math.min(...Object.values(obj))
// }


// console.log(findSmallest ({"siyan": 23, "magenta": 12,"sarı": 10}))



// 2.2 Hər arrın maksimum sayını tapan maxNums adlı funksiya yaradın
// console.log(maxNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); //[7, 90, 2]
// console.log(maxNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])); // [-34, -2, 7]

// function maxNums(array) {
//     return array.map(el=>Math.max(...el))
    
// }
//  function maxNums(array) {
//   return array.map((el)=>Math.max.apply(null,el))
    
//  }

// console.log(maxNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]))
// console.log(maxNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]))


// 2.3 Simvolun ilk indeksini və sonuncu indeksini qaytaran 'findLetterIndex(text,letter)' adlı funksiya yaradın.




// function FindLEtterIndex(text,letter) {
//     return [text.indexOf(letter),text.lastIndexOf(letter)]
// }
// console.log(FindLEtterIndex("hello", "l")); // [2,3]
// console.log(FindLEtterIndex("happy", "h")); //[0, 0]


// 2.4 arr və n rəqəmlərindən ibarət massiv götürən checkNum adlı funksiya yaradın.
// Əgər hər hansı iki elementin cəmi verilmiş ədədə bərabərdirsə, doğru qaytarın. Əks halda, yalanı qaytarın.


// console.log(checkNum([10, 12, 4, 7, 9, 11], 16));  //true
// console.log(checkNum([2, 8, 9, 12, 45, 78], 1)); //false
// console.log(checkNum([0, 9, 7, 23, 19, 18, 17, 66], 39)); //false

