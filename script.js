function addTask(){
    var li = document.createElement("li")
    var inputVal = document.getElementById("item").value;
    var txtNode = document.createTextNode(inputVal);
    li.appendChild(txtNode);

    if(inputVal === ''){
        alert("Please provide a text !");
    }
    else{
        document.getElementById("list").appendChild(li)
    }
    document.getElementById("item").value = "";

    addButtons(li)

}

function addButtons(li){
var editBtn = document.createElement("button1")
editBtn.innerHTML='<i class="fas fa-pen"></i>';
editBtn.onclick = function(){
    editTask(li);
}

var deleteBtn = document.createElement("button1")
deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
deleteBtn.onclick =  function(){
    deleteTask(li)
}

li.appendChild(editBtn);
li.appendChild(deleteBtn);
}

function editTask(li) {
    var newText = prompt("Edit Task:", li.textContent);
    if (newText !== null) {
        li.firstChild.nodeValue = newText;
    }
}

function deleteTask(li){
    var parent = li.parentNode;
    console.log(parent);
    parent.removeChild(li);
}
