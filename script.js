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
     <td class="p-3 priority">${priority}</td>
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
        if (row.style.textDecoration === "line-through") {
            row.style.textDecoration = "none";
            markDoneBtn.textContent = "Completed";
        } else {
            row.style.textDecoration = "line-through";
            markDoneBtn.textContent = "Undo";
        }
    });
    sortByPriority();//call sorting function
});

function sortByPriority() {
    const rows = Array.from(taskList.querySelectorAll("tr"));//select all table rows.
    //set priority order
    const priorityOrder = {
        "Top Priority": 1,
        "Middle Priority": 2,
        "Less Priority": 3
    };
    //sort method
    rows.sort((a, b) => {
        const aPriority = a.querySelector(".priority").textContent.trim(); //
        const bPriority = b.querySelector(".priority").textContent.trim();
        return priorityOrder[aPriority] - priorityOrder[bPriority];

    });
    //re-append them to show the task in new order
    rows.forEach(row => taskList.appendChild(row));


}
//clearall button
clearall.addEventListener("click", () => {
    taskList.innerHTML = "";
});

//A NodeList is a collection (or list) of DOM nodes that JavaScript gives you when you query the HTML document