

function submitForm(){
    let taskName = document.getElementById( "taskEntryForm.task").innerHTML;
    let taskDate = document.getElementById("date").innerHTML;
    let taskNote = document.getElementById("taskNote").innerHTML;
    console.log(taskName + ' ' + taskDate + ' ' + taskNote);
    alert('mike was here');
    alert(taskName + ' ' + taskDate + ' ' + taskNote);
}

