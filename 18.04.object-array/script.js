// 1.Adlar massivini qəbul edən və adın ilk hərfini qaytaran 'secretName()' adlı funksiya yaradın./////////////

let names1 = ["Adam", "Sarah", "Malcolm"] //"ASM"
let names2 = ["Harry", "Newt", "Luna", "Cho"] //"CHLN"
let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"] //"CJMPRR"

function secretName(names) {
    let secret = ""
    for (let i = 0; i < names.length; i++) {
        secret += names[i][0]
    } return secret
}
console.log(secretName(names1))
console.log(secretName(names2))
console.log(secretName(names3))



const users = [
    { name: 'Anar', surname: 'Hesenli', age: '22', uni: 'ADA', gender: 'male' },
    { name: 'Nezrin', surname: 'Reshidova', age: '23', uni: 'UNEC', gender: 'female' },
    { name: 'Hikmet', surname: 'Hesenova', age: '22', uni: 'UNEC', gender: 'male' },
    { name: 'Nicat', surname: 'Sadiqov', age: '25', uni: 'UNEC', gender: 'male' },
    { name: 'Murad', surname: 'Salmanli', age: '23', uni: 'ADNSU', gender: 'male' },
    { name: 'Aynure', surname: 'Hesenzade', age: '23', uni: 'BMU', gender: 'female' },
]

// 2.1.“UNEC”də təhsil alan istifadəçiləri göstərin və soyadı “r” ilə başlayır.
const usersName = users.filter(user => user.uni === "UNEC" && user.surname.charAt(0) == "R")
console.log(usersName)
// 2.2.Yaşları 22-yə bərabər olan istifadəçiləri göstərin və adı "a" ilə başlayır.

const usersName1 = users.filter(user => user.age === "22" && user.name.charAt(0) == "A")
console.log(usersName1)


// 2.3.Yeni massivi qaytarın, əgər istifadəçi kişidirsə, adının qarşısına 'Cənab' və ya Xanım əlavə edin (məsələn:'Ad:'Cənab Anar', 'Aynure xanım').
const nums1=users.map(user=>user.gender=="male"? user.name=`Cənab ${user.name}`:user.name=` ${user.name} Xanim`)

users.name=nums1
console.log(users);


// 2.4.İstifadəçiləri yaşa görə çeşidləyin (artan).

console.log(users.sort((a, b) => a.age - b.age))


// 3. Qarışıq massiv////////////////////////////////////////// ///////////////////////
const letters = ['a', 'b', 'c', 'd']
const numbers = [1, 2, 3, 4, 5, 6, 7]
function usersName9(letter) {
   let user3= letter[parseInt(Math.random()*letter.length)]
    return user3
}
console.log(usersName9(letters));
console.log(usersName9(numbers));


// 4.arr4-ün qiymətini 2-yə bölün.
const arr4 = [
    {
        product: 'Lenova',
        price: 1900,
    },
    {
        product: 'HP',
        price: 1300,
    },
    {
        product: 'Acer',
        price: 1600,
    },
]

const arr5 = arr4.map(user => user.price / 2)
console.log(arr5)



// 5. Rəqəmi tərsi ilə bağlamaq üçün 'reverseNum()' adlı funksiya yaradın.
let num1 = 246 //246642
let num2 = 102 //102201
let num3 = 152 //152251
function userName5(num) {
    let adi = num + ""
let nums =+( adi + adi.split("").reverse().join(""))
return nums
}

console.log(userName5(num1))
console.log(userName5(num2))
console.log(userName5(num3))

