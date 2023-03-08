// window.addEventListener('load', () =>{
//     const form = document.querySelector(".new-task-form");
//     const input = document.querySelector(".new-task-input");
//     const list_el = document.querySelector(".tasks");

//     form .addEventListener('submit', (e)=> {
//         e.preventDefault();

//          const task = input.value;

//         if(!task) {
//             alert("please fill out the task");
//             return;
//         } 

//         const task_el = document.createElement("div");
//         task_el.classList.add("task");

//         const task_content_el=document.createElement("div");
//         task_content_el.classList.add("content");
//         task_content_el.innerText = task;

//         task_el.appendChild(task_content_el);
        
//         const task_input_el = document.createElement("input");
//         task_input_el.classList.add("text");
//         task_input_el.type = "text";
//         task_input_el.value = "task";
//         task_input_el.setAttribute("readonly", "readonly");

//         task_content_el.appendChild("task_input_el");

//         list_el.appendChild(task_el);
//     })
// })

//meore cda


    // const input = document.getElementById("new-task-input");
   

    // var inputValue = input.value;
    // var btnSubmit = document.getElementById("new-task-submit");

    // btnSubmit.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     saveInputValue();
    // })

    // console.log(inputValue);

    // const saveInputValue = () => {
    //     var newTask = document.createElement("div");
    //     newTask.classList.add("task");
    //     var taskContent = createElement("p");
    //     taskContent.classList.add(task-content);
    //     newTask.appendChild(taskContent);
    //     document.getElementById("tasks").appendChild(newTask);
    // }

   

    // 



    //mesame cda


    window.addEventListener('load', () => {
      const form = document.querySelector("#new-task-form");
      const input = document.querySelector("#new-task-input");
      const list_el = document.querySelector("#tasks");
    
      // Load tasks from localStorage
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
      function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
        .then(() => {
          console.log(`Copied to clipboard: ${text}`);
        })
        .catch((error) => {
          console.error(`Error copying to clipboard: ${error}`);
        });
      }
    
      function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
    
      function addTask(task, index) {
        const task_el = document.createElement("div");
        task_el.classList.add("task");
    
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
    
        task_el.appendChild(task_content_el);
    
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");
    
        task_content_el.appendChild(task_input_el);
    
        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");
    
        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";
    
        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";
    
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
    
        task_el.appendChild(task_actions_el);
    
        list_el.appendChild(task_el);
    
        task_edit_el.addEventListener('click', () => {
          if(task_edit_el.innerText.toLowerCase() == "edit"){
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit_el.innerText = "Save";
          } else {
            task_input_el.setAttribute("readonly", "readonly");
            task_edit_el.innerText = "Edit";
            // Update task in localStorage
            tasks[index] = task_input_el.value;
            saveTasks();
          }
        });
    
        task_delete_el.addEventListener('click', () => {
          list_el.removeChild(task_el);
          // Remove task from tasks array in localStorage
          tasks.splice(index, 1);
          saveTasks();
        });
      }
    
      // Add existing tasks from localStorage to the page
      tasks.forEach(addTask);
    
      form.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const task = input.value.trim();
        console.log(task);
    
        if(!task){
          alert("please fill out the task");
          return;
        }
    
        copyToClipboard(task);
    
        addTask(task, tasks.length);
        
        tasks.push(task);
        saveTasks();
    
        input.value = "";
      });
    });
    

    