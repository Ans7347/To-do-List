// document.querySelector("#push").onclick=function(){
//     if(document.querySelector('#newtask input').value.length==0){
//         alert("Please Enter a Task")
//     }
//     else{
//         document.querySelector('#tasks').innerHTML+=`
//         <div class="task">
//         <span id="taskname">
//         ${document.querySelector('#newtask input').value}
//         </span>
//         <button class="delete">
//         <i class="fa-solid fa-trash"></i>
//         </button>
//         `;
//         var current_tasks=document.querySelectorAll(".delete");
//         for(var i=0;i<current_tasks.length;i++){
//             current_tasks[i].onclick=function(){
//                 this.parentNode.remove();
//             }
//         }
//         var tasks=document.querySelectorAll(".task");
//         for(var i=0;i<tasks.length;i++){
//             tasks[i].onclick=function(){
//                 this.classList.toggle('completed');
//             }
//         }
//         document.querySelector("#newtask input").value="";
//     }
// }

document.querySelector("#push").onclick = function () {
    var taskInput = document.querySelector('#newtask input');
    var dateTimeInput = document.querySelector('#taskDateTime');

    if (taskInput.value.length == 0) {
        alert("Please Enter a Task");
    } else {
        var taskDateTime = dateTimeInput.value || "No date and time set";

        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${taskInput.value}
                </span>
                <span class="task-datetime">
                    ${taskDateTime}
                </span>
                <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;

        var currentTasks = document.querySelectorAll(".delete");
        for (var i = 0; i < currentTasks.length; i++) {
            currentTasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle('completed');
            }
        }

        taskInput.value = "";
        dateTimeInput.value = "";
    }
};
