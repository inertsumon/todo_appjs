//open taskInput form
document.getElementById("add-task").addEventListener("click", taskInputBTN);


function taskInputBTN(){
    
    const taskInput = document.getElementById("task-input");
         
    taskInput.style.display = "block";
       
}

//clear input of form
document.getElementById("form-clear").addEventListener("click", clearFormBTN);


function clearFormBTN(){
    
    document.getElementById('task-name').value = "";
    document.getElementById('task-desc').value = ""; 
    document.getElementById("time").value="";
       
}
//show the input task
document.getElementById("add-taskBtn").addEventListener("click", taskShow);

function taskShow() {
   
    const taskInput = document.getElementById("task-input");
    taskInput.style.display = "none";
    
    let taskName = document.getElementById("task-name").value;
    let taskDesc = document.getElementById("task-desc").value;
    let taskTime = document.getElementById("time").value;



    if (taskName) {
        //clear the invalid message
        const invalidTask=  document.getElementById("invalid-input"); 
        invalidTask.style.display = "none";
      
            const taskArea = document.getElementById("task-show");
            const div = document.createElement("div");
            div.classList.add("task");
                div.innerHTML = `           
                <h3> Task Name: ${taskName}</h3>
                <h5> Description: ${taskDesc}</h5>
                <h5> Time: ${taskTime}</h5>`
            taskArea.appendChild(div);
        
    }
    //validate the input
    else {
             
            const invalidInput = document.getElementById("invalid-input");        
            invalidInput.style.display = "block";
       
    }

    addAll(taskName,taskTime)

    document.getElementById('task-name').value = "";
    document.getElementById('task-desc').value = ""; 
    document.getElementById("time").value="";
}

//add to local storage
function addAll(taskName,taskTime) { 
    const item = getItem();
    item[taskName] = taskTime;
    const itemStringified = JSON.stringify(item);
    localStorage.setItem("task", itemStringified);

}
//get from local storage
function getItem() {
    const items = localStorage.getItem("task");
    let itemsObj = {};
    if (items) {
        itemsObj = JSON.parse(items);
    }
    else {
        itemsObj = {};
        
    }
    return itemsObj;
}

//display from local storage
function displayTask(taskName,taskTime) {
    const invalidTask=  document.getElementById("invalid-input"); 
    invalidTask.style.display = "none";
  
        const taskArea = document.getElementById("task-show");
        const div = document.createElement("div");
        div.classList.add("task");
            div.innerHTML = `           
            <h3> Task Name: ${taskName}</h3>
            <h5> Time: ${taskTime}</h5>`
        taskArea.appendChild(div);
}

document.getElementById("show-task").addEventListener("click",  displayLocalStorageCart = () => {
    const item = getItem();
    for (const taskName in item) {
              
        displayTask(taskName,item[taskName]);
    }
})

//show today time
setInterval(currentTime, 1000);

function currentTime() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();    
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
       
    document.getElementById("today").innerText = `Date: ${date}    Time: ${time}`;   
}

const url = "https://www.googleapis.com/calendar/v3/calendars/primary";

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
