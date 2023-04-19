// 1. Massivdən sətirləri süzün///////////////////////////////////// ///////////
// Mənfi olmayan tam ədədlər və sətirlər massivini götürən və qaytaran 'filterArray(arr)' adlı funksiya yaradın.
// sətirləri olmayan yeni massiv.


// filterArray  ([1, 'c', 2, "a", "b"]) // [1, 2]
// filterArray(['4', 1, "a", "b", 0, 15])  //[1, 0, 15]

function filterArray1(arr) {

    return arr.filter(el => typeof el === 'number')
}
console.log(filterArray1(([1, 'c', 2, "a", "b"])))
console.log(filterArray1((['4', 1, "a", "b", 0, 15])))



// 2.Bir dilimin cəmlənməsi///////////////////////////////////////// ////////////////////////  slice
// Massiv və n tam ədədi olan 'sliceSum(arr, n)' adlı funksiya yaradın, massivdəki ilk n ədədin cəmini qaytarın.

// sliceSum=([9, 8, 7, 6], 3)  //24
// sliceSum([1, 3, 2], 2) //4
// sliceSum([3, 6, 2], 0) //0
function sliceSum(arr, n) {
    
    return arr.slice(0,n).reduce((sum,curr)=>sum+curr,0)
}
console.log(sliceSum([9, 8, 7, 6], 3))  //24
console.log(sliceSum([1, 3, 2], 2))   //4
console.log(sliceSum([3, 6, 2], 0))  //0



// 3.Ofoqrafiya///////////////////////////////////////////////////// ////////////////////////
// Tam söz tamamlanana qədər hərfləri ardıcıl olaraq əlavə etməklə sözü qəbul edən və onu hecalayan 'imla(str)' adlı funksiya yaradın.


// spelling("bee") // ["b", "be", "bee"]
// spelling("happy") //["h", "ha", "hap", "happ", "happy"]


function spelling(str) {
    let str1 = []
    let n = 0;
    for (c in str) {
        str1.push(str.slice(0, ++n))
    } return str1
}
console.log(spelling("bee"))
console.log(spelling("happy"))






// 4. Hash və Pluslar///////////////////////////////////////// //////////////////////
// Sətirdə hash və artıların sayını qaytaran "hashPlusCount(str)" adlı funksiya yaradın.
// Boş sətir üçün [0, 0] qaytarın.
// [heşlər, müsbətlər] sırası ilə qayıdın.

// hashPlusCount("###+") // [3, 1]
// hashPlusCount("#+++#+#++#") // [4, 6]
// hashPlusCount("") // [0, 0]


function hash(str) {
    let hases=0
    let pluses=0
    str.split``.map((item)=>item===`#`?hases++:pluses++)
    return [hases,pluses]
}
console.log(hash("###+"))  //[3,1]

    
// 5. İşi tərsinə çevirin///////////////////////////////////////// ////////////////////////
// Sətir nəzərə alınmaqla, işi tərsinə çevirmək üçün "reverseCase(str)" adlı funksiya yaradın.
// Bütün kiçik hərflər böyük hərf olmalıdır və əksinə.


// reverseCase("Happy Birthday") //"hAPPY bIRTHDAY"
// reverseCase("MANY THANKS") //"many thanks"

function reverseCase(str) {
    return str.split("").map((item)=>item===item.toUpperCase() ? item.toLowerCase():item.toUpperCase()).join("")
}
console.log(reverseCase("Happy Birthday"));
