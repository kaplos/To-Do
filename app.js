let List = document.getElementById('List'); 
let counter = 0;
let formattedDate = "";
keyinput();
function getData(){
    let todoInput = document.getElementById('ToDo');
    let todo = todoInput.value;
    let dateinput = document.getElementById('DueDate');
    const date = new Date(dateinput.value);
    console.log(dateinput.value); 
    formattedDate = dateinput.value===""? "No Due Date" : `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    dateinput.textContent = formattedDate;
    let form = document.getElementById('toDo');    
    form.reset();
    addItem(todo,formattedDate)
}

function removeToDo(index){
  let listItems = Array.from(List.children);
  let lastDiv = listItems[index == -1 ? listItems.length - 1 : index];
  lastDiv.parentNode.removeChild(lastDiv);
}

function removeCheckedItems() {
    let listItems = Array.from(List.children);
    listItems.forEach((item) => {
        let checkBox = item.querySelector('.checkBox');
        if (checkBox.checked) {
            item.parentNode.removeChild(item);
        }
    });
}
function removeLastItem() {
    removeToDo(-1);
    removeButton('remove');
    
}
    
    function removeAllToDo(){
    document.querySelectorAll('.checkBox').forEach((checkBox)=>{
            
            if (checkBox.checked) {
                removeToDo(checkBox.id)
            } else {
                console.log('Checkbox is not checked');
            }
        } );
    }

function removeButton(activator){
    let removeButton = document.getElementById('remove');
    switch(activator){
        case 'remove':
            removeButton.disabled = true;
        break;
        case 'add':
            removeButton.disabled = false;
        break;
    }
}

function addItem(todo,duedate){
    
    List = document.getElementById('List');
    console.log("button clicked");
    let div = document.createElement('div');
    let checkBox = document.createElement('input');
    let date = document.createElement('time');
    date.setAttribute('datetime',duedate);
    date.textContent=duedate;
    checkBox.setAttribute("type","checkBox");
    checkBox.classList.add('checkBox');
    checkBox.setAttribute('id',`${counter}`)
    div.classList.add("listDiv");
    div.setAttribute('id',`data-${counter}`)
    counter++;
    const listItem = document.createElement("span");
    listItem.textContent = todo;
    div.appendChild(checkBox);
    div.appendChild(listItem);
    div.appendChild(date);
    (listItem.innerHTML === ""? "" : List.appendChild(div));
    removeButton('add');
    EventCheckBox(checkBox);
    //saveToDoList(List);
    
}
function saveToDoList(List){
    localStorage.setItem('todoList', List.innerHTML);
    
}


function EventCheckBox(checkBox){
    
    checkBox.addEventListener('change', (event) => {
        let sibling = event.target.nextSibling;
        let date = sibling.nextSibling;
        if(event.target.checked){
            //sibling.setAttribute("style", 'text-decoration: line-through; color: green; ');
            sibling.setAttribute("class", 'completed')
            console.log(date);
            date.setAttribute('dateTime',"completed");
            date.setAttribute('class',"completed");
            date.textContent = "completed";
        }else{
            sibling.classList.remove('completed');
            date.setAttribute('dateTime',formattedDate);
            date.classList.remove('completed');
            date.textContent = `${formattedDate}`;
        }
        console.log("Checkbox state changed");
    });
}
function keyinput(){
    document.addEventListener('keypress',(event)=>{
        console.log(event);
        if(event.key=="Enter"){
            event.preventDefault();
            getData();
        }
    })
}

