////////////Array tasks/////////

//1
const num=[0,1,2,3,4,5,6,7,8,9,10]
console.log(num)
//2
const massiv=[25,true,"kitab"]
console.log(massiv)
//3
const bos=[]
bos.push(1,2,3,4,5)
console.log(bos)
//4
const reqem=[0,1,2,3,4,5,6,7]
reqem.push(8)
console.log(reqem)
//5
const kitab=[]
kitab.push(5,6,7)
kitab.shift()
kitab.unshift(1)
console.log(kitab)
//6
const haqqinda=["adi","soyadi","Quba"]
haqqinda[2]="Qusar"
console.log(haqqinda)
//7



//////////Object tasks/////////
//8
const obj={
    id:1,
    ad:"Mezahir",
    soyad:"Verdiyev",
    Naxodit:"GDU"
}
console.log(obj)
//9
const obj2=obj
console.log(obj2)
//10
const ad={...obj,id:3}
console.log(ad)

//11
const obj4=obj
for(let num in obj4){
    console.log(num)
}
//12
const obj5=obj
for(let numer in obj5){
    console.log(obj5)
}
//13
const obj8=obj
delete obj8.location
console.log(obj8)


console.log(">>>>>>>>>>>>>>>>>>>>")
//14
const newObj=Object.assign(obj)
console.log(newObj)

