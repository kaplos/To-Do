let ulParent = document.querySelectorAll('#List'); 
let counter = 1;


function getData(){
    let todoInput = document.getElementById('ToDo');
    let todo = todoInput.value;
    let dateinput = document.getElementById('DueDate');
    let duedate = dateinput.value;
    let form = document.getElementById('toDo');
    let AddButton = document.getElementById('add');
    
    form.reset();

    addItem(todo,duedate)
}
function removeAllToDo(){
    let checkBoxParent = checkedBoxes.parent;
    let checkedBoxes = document.getElementsByClassName('checkBox').forEach((checkBox)=>{
        checkBox.checked? 
    }
}

function addItem(todo,duedate){
    
    const List = document.getElementById('List');
    console.log("button clicked");
    let div = document.createElement('div');
    let checkBox = document.createElement('input');
    let date = document.createElement('time');
    date.setAttribute('datetime',duedate);
    checkBox.setAttribute("type","checkBox");
    checkBox.classList.add('checkBox');
    checkBox.setAttribute('id',`data-${counter}`)
    div.classList.add("listDiv");
    div.setAttribute('id',`data-${counter}`)
    counter++;
    const listItem = document.createElement("span");
    listItem.textContent = todo;
    
    div.appendChild(checkBox);
    div.appendChild(listItem);
    div.appendChild(date);
    (listItem.innerHTML === ""? "" : List.appendChild(div));
    
    EventCheckBox(checkBox);
    //saveToDoList(List);
    
}
function saveToDoList(ulitem){
    localStorage.setItem(ulitem)
}

function checkBox(checkBox){
   
    checkBox.addEventListener('change', (event) => {
        let sibling = event.target.nextSibling;
        if(event.target.checked){
            sibling.classList.add('complete');
        }else{
            sibling.classList.remove('complete')
        }
        console.log("Checkbox state changed");
    });
}

