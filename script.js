const taskinput = document.getElementById("Input-task");
const priorityInput = document.getElementById("select-priority");
const deadlineInput = document.getElementById("deadline-input");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("tasklist");
const clearall = document.getElementById("clearAllBtn");

//add EventListener
addTaskButton.addEventListener("click", () => {
    const task = taskinput.value;
    const priority = priorityInput.value;
    const deadline = deadlineInput.value;
    //validation
    if (!task || !priority || !deadline) {
        alert("Please fill all the fields!");
        return;
    }

    //create new row 
    const row = document.createElement("tr");
    row.classList.add("border-b");
    //add cells 
    row.innerHTML =
        `<td class="p-3">${task}</td>
     <td class="p-3">${priority}</td>
     <td class="p-3">${deadline}</td>
     <td class="p-3">
     <button class="bg-green-500 text-white px-3 rounded py-1  hover:bg-green-600 mark-done-btn" >
     Mark Done
     </button>
     </td>`;

    //add row to table 
    taskList.appendChild(row);

    //clear input fields 
    taskinput.value = "";
    taskinput.placeholder = "Enter task...";
    taskinput.focus();
    priorityInput.value = "Top Priority";
    deadlineInput.value = "";
    
   

    //Mark Done Button
    const markDoneBtn = row.querySelector(".mark-done-btn");
    markDoneBtn.addEventListener("click", () => {
        row.style.textDecoration = "line-through"; // or row.remove();
        markDoneBtn.textContent = "Completed";
        markDoneBtn.disabled = true;
        markDoneBtn.classList.remove("bg-green-500");
        markDoneBtn.classList.add("bg-gray-400");
    });
    //clearall button
    clearall.addEventListener("click",()=>{
        taskList.innerHTML="";
    });
    


});