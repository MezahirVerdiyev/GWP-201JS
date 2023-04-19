// function adi(num) {
//     let x = num % 10
//     let Y = num / 10
//     console.log("qaliqi", x)
//     console.log("nisbeti", Y)
// } adi(123) 



// const ad = (a, b) => (a + b)
// console.log(5, 3)

//1
const arr1=['a','b','c','d','e','f','j','k','y','u']

function getRandomLetter(){
    console.log(arr1[ Math.floor([Math.random(arr1)]*arr1.length)])

}getRandomLetter()
console.log(arr1[ Math.floor([Math.random(arr1)]*arr1.length)])



//2
const arr2=[1,2,3,4,14,5,6,8]
let sum=0
function calcSum(){
    
    for(i=0;i<arr2.length;i++){
        if(arr2[i]%2==0){
            sum+=arr2[i]
        }
    }return sum
}calcSum()
console.log(sum)
//3
const arr3=[-3,-5,-9,3,0,true,false,-22]

function getPositiveName(){
   console.log(arr3[Math.abs(...arr3)])
} getPositiveName()


//4
const arr4=[4,9,16,20,24,43,81,100]
const yeni=[]
const casd=()=>{ for (i=0;i<arr4.length;i++){
    yeni.push(Math.floor(Math.sqrt(arr4[i])))
}
return yeni}
   
console.log(casd())



