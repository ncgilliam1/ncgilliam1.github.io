document.addEventListener('DOMContentLoaded', function() {

    let nameinp = document.getElementById('nameinput');
    let priorityinp = document.getElementById('priorityinput');
    let importantinp = document.getElementById('importantinput');
    let taskmanager = document.getElementById('taskmanager');
    let highdiv = document.getElementById('high');
    let mediumdiv = document.getElementById('medium');
    let lowdiv = document.getElementById('low');
    let addtask = document.getElementById('addtask');

    let delbutton = document.createElement('button');
    delbutton.id = 'delbutton';
    delbutton.textContent = 'Delete';

    let tasks = [];

    addtask.addEventListener('click', function(e) {
        
        e.preventDefault();
        
        let nameval = nameinp.value; 
        let priorityval = priorityinp.value; 
        let importantval = importantinp.checked; 

        let taskID = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

        let currdate = new Date().toLocaleDateString('en-US');

        let currTask = {
            id: taskID,
            name: nameval,
            priority: priorityval, 
            isImportant: importantinp.checked,
            isCompleted: false,
            date: currdate
        };

        tasks.push(currTask)
        console.log(JSON.stringify(tasks, null, 2));

        let newTask = document.createElement('div');
        newTask.setAttribute('data-taskid', taskID);
        newTask.id = 'newtask';

        let namelab = document.createElement('label');
        namelab.id = 'newnamelab';
        namelab.innerHTML = nameval;

        let prioritylab = document.createElement('label');
        prioritylab.id = 'newtaskpriority';
        prioritylab.innerHTML = "Priority: " + priorityval

        let dateadded = document.createElement('label');
        dateadded.id = 'newdateadded';
        dateadded.innerHTML = currdate; 

        if (importantval) {
            newTask.style.backgroundColor = '#E36966';
        }

        let completed = document.createElement('input');
        completed.type = 'checkbox';
        completed.id = 'completedinput'; 

        newTask.appendChild(namelab);
        newTask.appendChild(prioritylab);
        newTask.appendChild(dateadded);

        let newdelbutton = delbutton.cloneNode(true);

        newTask.appendChild(newdelbutton);
        newdelbutton.addEventListener('click', function() {
            let refID = newTask.getAttribute('data-taskid');

            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].id == refID) {
                    tasks.splice(i, 1)
                    break; 
                };
                
            };

            newTask.remove();
            console.log(JSON.stringify(tasks, null, 2));
        
        });

        newTask.appendChild(completed); 

        if (priorityval === 'high') {
            highdiv.appendChild(newTask);
        } else if (priorityval === 'medium') {
            mediumdiv.appendChild(newTask);
        } else {
            lowdiv.appendChild(newTask);
        }

        completed.addEventListener('change', function(e) {

            if (completed.checked) {
                newTask.querySelectorAll('label').forEach(function(label) {
                    label.style.textDecoration = 'line-through'; 
   
                })
                
                let refID = newTask.getAttribute('data-taskid');
            
                for (let i = 0; i < tasks.length; i++) {
                    if (tasks[i].id == refID) {
                        tasks[i].isCompleted = true; 
                        break; 
                    }
                };
            } else {
                newTask.querySelectorAll('label').forEach(function(label) {
                    label.style.textDecoration = 'none'; 
                });
                let refID = newTask.getAttribute('data-taskid');
            
                for (let i = 0; i < tasks.length; i++) {
                    if (tasks[i].id == refID) {
                        tasks[i].isCompleted = false; 
                        break; 
                    }
                };
            }
            console.log(JSON.stringify(tasks, null, 2));
        });

    });

});






























// $(document).ready(function() {

//     let taskmanager = document.getElementById('taskmanager');
//     let highdiv = document.getElementById('high');
//     let mediumdiv = document.getElementById('medium');
//     let lowdiv = document.getElementById('low');

//     let delbutton = $('<label></label>')
//         .attr('id', 'delbutton')
//         .text('Delete');

//     let isImportant = false; 

//     $('#addtask').click(function(e) {

//         e.preventDefault(); 

//         let nameval = $('#nameinput').val();
//         let priorityval = $('#priorityinput').val(); 
//         let importantval = $('#importantinput'); 

//         console.log(nameval, priorityval, importantval);

//         let newTask = $('<div></div>')
//             .attr('id', 'newtask')

//         let namelab = $('<label></label>')
//             .attr('id', 'newnamelab')
//             .text(nameval)
    
//         let prioritylab = $('<label></label>')
//             .text(priorityval.toUpperCase()) 
//             .attr('id', 'newtaskpriority')


//         let dateadded = $('<label></label>')
//             .attr('id','newdateadded')
//             .text(new Date().toLocaleDateString('en-US'))


//         if ($(importantval).is(':checked')) {
//             isImportant = true; 
//             newTask.css('background-color', '#E36966')
//         }

//         $(newTask).append(namelab)
//         $(newTask).append(prioritylab);
//         $(newTask).append(dateadded); 
//         $(newTask).append(delbutton.clone());

//         if (priorityval == "high") {

//             $(highdiv).append(newTask);

//         } else if (priorityval == 'medium') {
//             $(mediumdiv).append(newTask);
//         } else {
//             $(lowdiv).append(newTask)
//         }; 
     
//     });
// });




