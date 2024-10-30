document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    
    function createTask(task) {
        const li = document.createElement('li');
        li.textContent = task;

                const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => editTask(li, task);
  
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTask(li);

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }

    addTaskBtn.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task === '') {
            alert('Please enter a task!');
            return;
        }
        createTask(task);
        taskInput.value = '';
    });

    function editTask(li, oldTask) {
        const newTask = prompt('Edit your task:', oldTask);
        if (newTask !== null && newTask.trim() !== '') {
            li.firstChild.textContent = newTask.trim();
        }
    }

    function deleteTask(li) {
        taskList.removeChild(li);
    }
});
