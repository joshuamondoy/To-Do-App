const input = document.querySelector('[data-new-item]')
const addButton = document.querySelector("#add-button")
const list = document.querySelector(".saved-list")
const heading = document.querySelector(".heading")
const errMsg = document.querySelector(".err-msg");
const taskNumber = document.querySelector("#task-number")
const allClear = document.querySelector(".clear");

function addNew() {
    if(input.value !== '') { //if not empty
        //initialize
        const newDiv = document.createElement("div");
        let newList = document.createElement("li"); //create new li
        let listVal = input.value; //get the value from form
        const delBtn = document.createElement("button"); //create delete button
        const checkBtn = document.createElement("button")//create dash button
        listVal = listVal[0].toUpperCase() + listVal.slice(1); //capitalized the first letter
        //append
        list.prepend(newDiv) //this will append the new div in the ul 
        newDiv.append(newList)
        newList.append(document.createTextNode(listVal)) //append the li to the text from the form
        newDiv.append(delBtn) //append the button to the new list
        newDiv.append(checkBtn)//append the button to the new list
        newDiv.className = "list-div";
        delBtn.className = "fas fa-trash-alt"; //provide class name for font awesome icon
        delBtn.id = "delete-btn"; //add an id name for css style
        checkBtn.className = "fas fa-check-square"; //provide class name for font awesome icon
        checkBtn.id = "check-btn"; //provid id name for css style
        newList.className = "list-class"; //provide class name for the new li's
        input.value = '';
        document.querySelector('.empty').textContent = '';
        countTask();
        
            
   } else {
       const warning = document.getElementsByName('input')[0];
       warning.classList.add('warning');
       warning.value = ''
       warning.placeholder = '*No input yet'
       setTimeout(() => {
        warning.classList.remove('warning');
        warning.placeholder = 'Enter task';
       }, 1000)
   }
}


function checkDelete(event) {
    const item = event.target;
    if(item.id === 'delete-btn') {
        const listDiv = item.parentElement; //this will delete the parent element which is the div itself
        listDiv.classList.add('del-fall'); //delete animation
        listDiv.addEventListener("transitionend", function(){ //transitionend event will wait for the animation to be finish before performing the delete function
            listDiv.remove();
            countTask()
            if(list.getElementsByTagName('li').length <= 0) { //check if there is no list 
                document.querySelector('.empty').textContent = 'No list to show';
            }
            
        });  
    } else if(item.id === 'check-btn') {
        const text = item.parentElement;
        text.classList.add('checked-list');
        item.style.cssText = "display: none"

        // unfinishTask.textContent = 0;
        // let taskLeft = list.getElementsByTagName('li').length - 1;
        // unfinishTask.textContent = `${taskLeft} unfinish task`
   
    }
}
function countTask() {
    taskNumber.textContent = 0;
    let taskLeft = list.getElementsByTagName('li').length;
    taskNumber.textContent = ` ${taskLeft}`;
    if(taskLeft === 0) {
        taskNumber.textContent = '';
    }
}

// function deleteAll() {
//     const delAll = document.querySelectorAll('.list-class').parentElement;
//     delAll.remove()
// }
addButton.addEventListener('click', addNew);

// Instead of targeting an element, we target a static parent -- I've chosen
// body since it's always there, but in bigger applications it's better to 
// target a more specific parent
list.addEventListener('click', checkDelete)
// allClear.addEventListener('click', deleteAll);


