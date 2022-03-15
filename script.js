var array = [];

onload = function () {
    if (localStorage.getItem("task") != null) {
        let newTask = localStorage.getItem("task");
        array = (JSON.parse(newTask));
        for (var i = 0; i < array.length; i++) {
            let h2 = document.createElement("h2");
            h2.innerHTML = array[i];
            document.body.appendChild(h2);
        }
    }
    else { };
}

function addTask() {
    let task = document.getElementById("fieldTask");
    task = task.value;
    array.push(task);
    let h2 = document.createElement("h2");
    h2.innerHTML = task;
    document.body.appendChild(h2);
    let string = JSON.stringify(array);
    localStorage.setItem("task", string);
}