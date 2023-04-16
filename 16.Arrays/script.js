///1

// const frontEnd=["HTML","CSS","JS","React","Redux"]
// const backEnd=["NOde","Express","MongoDB"]

// const fullStack=frontEnd.concat(backEnd)
// console.log(fullStack)



///2

// const ages=[19,22,19,24,20,25,26,24,25,24]
// let sum=0
// for(i=0;i<ages.length;i++){
//     sum=sum+ages[i]/ages.length

// }console.log(sum)



//3

const countries = [
    "Albaniya",
    "Boliviya",
    "Canada",
    "Denmark",
    "Ethiopiya",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya"
]

//4

// let numbers =[4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,6,4,5,6,2,5,6,3,7,3,7]

// let sum=0
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]==7){
//         sum+=i
//     }
// }console.log(sum)



//6

const todos = [
    {
        id: 1,
        title: "delectus aut autem",
        completed: false,
    },
    {
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: true,
    },
    {
        id: 3,
        title: "fugiat veniam minus",
        completed: false,
    },
    {
        id: 4,
        title: "et porro temporo",
        completed: true
    },
    {
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false,
    },
    {
        id: 6,
        title: "qui ullam ratione quibusdam volupdadem quia omnis",
        completed: false,

    },
    {
        id: 7,
        title: "illo expedita consoquatur quia in",
        completed: false,
    },
    {
        id: 8,
        title: "quo adipisci enim quam ut ab",
        completed: true,
    }
]
// console.log(todos.filter(todo=>todo.title.length>40))


///5

console.log(todos.filter(todo=>todo.completed===true))   