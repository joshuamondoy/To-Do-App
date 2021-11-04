const input = document.querySelector('[data-new-item]')
const addButton = document.querySelector("#add-button")
const list = document.querySelector(".saved-list")
const heading = document.querySelector(".heading")
const errMsg = document.querySelector(".err-msg");
const taskNumber = document.querySelector("#task-number");
const taskNumberIcon = document.querySelector(".task-number-icon ");
const allClear = document.querySelector(".clear-btn");
const currentDate = document.querySelector(".date-time");

function formatDate(dateObject) {
    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthName =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateParts = {
        dayOfTheWeek: dayName[dateObject.getDay()],
        day: dateObject.getDate(),
        month: monthName[dateObject.getMonth()],
        year: dateObject.getFullYear()
    };
    
    return `${dateParts.dayOfTheWeek}, ${dateParts.month} ${dateParts.day}, ${dateParts.year}`;
}
const myDate = new Date();
const formattedDate = formatDate(myDate);
currentDate.textContent = formattedDate;

function addNew() {
    if(input.value !== '' && input.value !== ' ') { //if not empty
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
        delBtn.className = "far fa-times-circle "; //provide class name for font awesome icon
        delBtn.id = "delete-btn"; //add an id name for css style
        checkBtn.className = "fas fa-check"; //provide class name for font awesome icon
        checkBtn.id = "check-btn"; //provid id name for css style
        newList.className = "list-class"; //provide class name for the new li's
        input.value = '';
        document.querySelector('.empty').textContent = '';
        countTask();
   } else {
       input.classList.add('warning');
       input.value = ''
       input.placeholder = '*Please input a task'
       setTimeout(() => {
        input.classList.remove('warning');
        input.placeholder = 'Enter new task';
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
                allClear.style.cssText = 'background: transparent; box-shadow: none';
            }
            
        });  
    } else if(item.id === 'check-btn') {
        const text = item.parentElement;
        text.classList.add('checked-list');
        item.style.cssText = "display: none"
    }
}
function countTask() {
    let taskLeft = list.getElementsByTagName('li').length;
    taskNumber.style.cssText = 'color: white';
    taskNumber.textContent = ` ${taskLeft}`;
    taskNumberIcon.style.cssText = 'color: white';
    if(taskLeft === 0) {
        taskNumber.textContent = '';
        taskNumber.style.cssText = 'color: transparent';
        taskNumberIcon.style.cssText = 'color: transparent';
        allClear.style.cssText = 'cursor: none';
    } else {
        allClear.style.cssText = 'box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); color: white';
    }
}
function deleteAll() {
    const allSaveList = document.querySelectorAll('.list-div');
    allSaveList.forEach((savedList) => {
        savedList.remove()
        countTask()
        document.querySelector('.empty').textContent = 'No list to show';
        allClear.style.cssText = 'background: transparent; box-shadow: none';
    })
}
// What’s happening is that by writing out our function with the parentheses on the end () we are calling the function. “Don’t we want to call the function?” you might say. And we do want to call it but we only want to call it once the event occurs. When we include the parentheses on the end like that, we execute that function as soon as the line is read by our program. The function will execute as soon as the script loads which is before the user can click the button.
addButton.addEventListener('click', addNew);

// for enter key event listener
input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        
        addNew();
    }
});

// Instead of targeting an element, we target a static parent -- I've chosen
// body since it's always there, but in bigger applications it's better to 
// target a more specific parent
list.addEventListener('click', checkDelete)
allClear.addEventListener('click', deleteAll);


