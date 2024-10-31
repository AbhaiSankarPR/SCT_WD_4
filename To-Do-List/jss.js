const textbox = document.getElementById("inputwork");
const dateInput = document.getElementById("inputdate");
const listContainer = document.getElementById("text");

function addTask() {
    if (textbox.value.trim() === '') {
        alert("Enter any task");
        return;
    }

    const dateTime = dateInput.value;
    if (!dateTime) {
        alert("Please select a date and time");
        return;
    }

    const li = document.createElement("li");
    li.textContent = `${textbox.value} (Due: ${dateTime})`;

    const span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);

    listContainer.appendChild(li);
    saveData();
    
    textbox.value = "";
    dateInput.value = "";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function getData() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}

getData();
