let tasks = [
    {
        "title": "قراءة كتاب",
        "date": "2025/2/2",
        "isDone": true

    }
    ,
    {
        "title": "حل الواجب",
        "date": "2025/2/2",
        "isDone": false}
    ,
    {
        "title": "المذاكرة",
        "date": "2025/2/2",
        "isDone": false
    }
]

const btnSubmitTask = document.getElementById("BtnAddTask")


const taskGetStorage = () => {

    const retrivedTask = JSON.parse(localStorage.getItem("tasks"))
    tasks = retrivedTask ?? []
}

taskGetStorage()

const renderTasks= () => {

    let taskContainer = document.getElementById("tasks")
    let taskCounter = document.getElementById("taskCounter")
    
    taskCounter.textContent = tasks.length
    
    taskContainer.innerHTML= ""

    const taskElment = tasks.map((task,index) => 
      
      
      `
    
         <div class="task ${task.isDone? 'done': ''}">


                        <div id="info">
                        <h3> ${task.title}</h3>
                        <span>${task.date}

                            <i class="bi bi-calendar-minus"></i>
                        </span>
                        
                        </div>

                        <!--ACTIONS BUTTONS-->
                        <div class="actions-btn">


                          <button onclick="deleteTask(${index})" class="btn btn-danger ">
                                <i class="bi bi-trash-fill"></i>
                              </button>

                          <button onclick="updateTask(${index})" class="btn btn-warning ">
                            <i class="bi bi-pencil-fill"></i>
                          </button>
                          
                        
                          ${task.isDone ? `

                          
                          <button onclick="toggleTask(${index})" class="btn btn-danger btn-round">
                            <i class="bi bi-x-circle-fill"></i>
                          </button>
                            
                            `: `
                            
                             <button onclick="toggleTask(${index})" class="btn btn-success btn-round">
                            <i class="bi bi-check-circle-fill"></i>
                            </button>

                            `}
                         

                          
                        </div>
                  <!--//ACTIONS BUTTONS//-->

                    </div>
        
        `).join('')

        taskContainer.innerHTML = taskElment
}


const dateTask = () => {

        let now = new Date()
        let date = now.toLocaleDateString('en-US') + ' ' + 
        now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
         
        return date
}


//objectTask
const addTasks = () => {

    btnSubmitTask.addEventListener("click", function(e) {

        e.preventDefault()
        
        

        const inputTaskElment = document.getElementById("input-task")
        const inputTask = inputTaskElment.value.trim()

        if (!inputTask)
          {
            alert("الرجاء ادخال المهمة .");
            return;
          }

        

        objTask = {
          "title": inputTask,
          "date": dateTask(),
          "isDone": false
        }

        tasks.push(objTask)
        taskStored()
        renderTasks()
        

        inputTaskElment.value= "";
    }
  
  
  
  )

}


const deleteTask = (index) => {

  let task = tasks[index]
  let isConfirm = confirm(`هل انت متاكد من حذف مهمة : ${task.title} ؟ `)

  if (isConfirm){
    tasks.splice(index, 1)
    taskStored()
    renderTasks()
  }
 

}

const updateTask = (index) => {

  let task = tasks[index]
  let newTask = prompt(" ادخل المهمة الجديدة : ", task.title)

  if (!newTask || newTask.trim() === "") {
    alert("لم يتم تحديث المهمة، الإدخال غير صالح!");
    return;
  }
  
  task.title = newTask
  task.date = dateTask()
  taskStored()
  renderTasks()


}

const toggleTask = (index) => {

  let task = tasks[index]

  task.isDone = !task.isDone
  taskStored()
  renderTasks()
}


const deleteAllTask = () => {

  if(tasks.length == 0){
    
    return alert("لايوجد مهام")
  }
  let isConfirm = confirm("هل تريد حذف جميع المهام؟")
  
  if(isConfirm){
    tasks = []
    renderTasks()
    taskStored()
  }

}

//=========LocalStorage============//

const taskStored = () => {

    let taskString = JSON.stringify(tasks);
    localStorage.setItem("tasks", taskString)

}




renderTasks()
addTasks()

