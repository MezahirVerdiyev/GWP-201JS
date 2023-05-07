import { ADI } from "./app.js";
//////1
function getALL() {
    fetch(ADI)
        .then(response => response.json())
        .then(json => console.log(json))

}
getALL()
///////2
function onlyTrue() {
    fetch(ADI)
        .then(response => response.json())
        .then(data => {
            const completedTodos = data.filter(todo => todo.completed === true);
            console.log(completedTodos);
        });
}
onlyTrue()

///////3
function userId(){
    fetch(ADI)
    .then(response => response.json())
    .then(data => {
        const completedTodos = data.filter(todo => todo.userId === 2);
        console.log(completedTodos);
    });
}
userId()
////////4
function getSuppliersById(id) {
    fetch(ADI)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}
getSuppliersById(18)

