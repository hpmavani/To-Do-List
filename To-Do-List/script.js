document.getElementById("addButton").addEventListener("click", displayTaskAdd); 
document.getElementsByClassName("close")[0].addEventListener("click", closeTaskAdd); 
var taskCount; 
if(localStorage.length == 0)
{
    taskCount = 0; 
}
else {
    taskCount = localStorage.length; 
}
 
for(let i = 0; i <= localStorage.length; i++)
{
    showTask(i); 
}

var checkbox = document.getElementsByClassName("checks"); 
var close = document.createElement("span");

//add EventListeners to existing tasks
for(let i = 0; i < checkbox.length; i++)
{
    let c = checkbox[i]; 
    console.log(c.id + "listener added"); 
    c.addEventListener("change", function () {
        localStorage.removeItem(c.id);
        let x = "t" + c.id; 
        document.getElementById(x).style.display = "none";  

    }); 
        
}

//Adds Task to Local Storage
document.getElementById("addTask").addEventListener("click", function(e) {
    e.preventDefault(); 
    console.log("clicked"); 
    const titleValue = document.getElementById("title").value; 
    const subjectValue = document.getElementById("subjects").value;
    

    const task = {
        title: titleValue,
        subject: subjectValue,
       
    };

    console.log("key: " + taskCount); 
    localStorage.setItem(taskCount, JSON.stringify(task));
    showTask(taskCount); 
    taskCount++; 
    
});

async function closeTaskAdd()
{
    document.getElementById("popUp").style.display = "none";
}


async function showTask(taskKey) {
    let myList = document.getElementById("taskList"); 
    console.log(taskKey); 
    let task = JSON.parse(localStorage.getItem(taskKey)); 
    if(task != null)
    {
        item = document.createElement("li"); //creates new list
        item.className = "list-group-item";
        item.id = "t" + taskKey;  

        let checkbox = document.createElement("input"); 
        checkbox.type = "checkbox"; 
        checkbox.setAttribute("class", "checks"); 
        checkbox.setAttribute("id", taskKey); 
        
        
        let eachTask = document.createElement("label"); 
        eachTask.setAttribute("id", "t" + checkbox.id); 

        checkbox.addEventListener("change", function () {
            if(checkbox.checked = true)
            {
                console.log("Remove task"); 
                localStorage.removeItem(checkbox.id);
                let x = "t" + checkbox.id; 
                eachTask.style.textDecoration = "line-through";  
            }
            else
            {
                localStorage.setItem(checkbox.id, task);
            }
            

        }); 

        if(task != null)
        {
            eachTask.setAttribute("class", "taskStyle"); 
            taskTitle = task.title; 
            taskSubject = task.subject;
            taskDate = task.due;
            eachTask.innerText = taskTitle + "\n" + "Subject: " + taskSubject; 
           
        }
        item.setAttribute("draggable", true); 
        
        item.appendChild(checkbox); 
        item.appendChild(eachTask);
        myList.appendChild(item);
        
    }
    
}

async function displayTaskAdd() {
    
    console.log("function called"); 
    document.getElementById("popUp").style.display = "block"; 
    
}


 



