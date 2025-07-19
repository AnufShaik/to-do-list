const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');
let btn = document.querySelector('button');

btn.addEventListener("click" , () =>{
    const taskText = taskInput.value;
    const li = document.createElement("li");
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    li.textContent = taskText;
    li.appendChild(deletebtn);
    taskList.appendChild(li);
    deletebtn.addEventListener("click" , () =>{
        taskList.removeChild(li);
    })
    taskInput.value = "";
}) 