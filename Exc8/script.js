let INP = document.querySelector(".INP");
let TASKS = document.querySelector(".TASKS");
let list = [];

function taskAdder(){
    let task = INP.value;
    list.push(task);
    INP.value = "";
    TASKS.innerHTML = list;
}
