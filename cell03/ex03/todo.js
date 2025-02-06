function addTask() {
    let task = prompt("Enter a new TO DO:");
    if (task) {
        create(task);
    }
}

function create(name) {
    let taskList = document.getElementById("ft_lilst");
    let task = document.createElement('div');
    task.className = "todo";
    task.textContent = name;
    task.onclick = function() {
        if (confirm("Do you really want to remove this TO DO?")) {
            task.remove();
        }
    }
    let list = document.getElementById("ft_list");
    list.insertBefore(task, list.firstChild);
}

