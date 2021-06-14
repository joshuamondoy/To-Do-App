const input = document.querySelector('[data-new-item]')
const addButton = document.querySelector("#add-button")
const list = document.querySelector(".saved-list")
const heading = document.querySelector(".heading")
const errMsg = document.querySelector(".errMsg");



function addNew() {
    if(input.value !== '') { //if not empty
        //initialize
        const newDiv = document.createElement("div");
        let newList = document.createElement("li"); //create new li
        let listVal = input.value; //get the value from form
        const delBtn = document.createElement("button"); //create delete button
        const checkBtn = document.createElement("button")//create dash button
        delBtn.innerText = "✖"; //set label for the button
        checkBtn.innerText = "✔" //set label for dash button
        listVal = listVal[0].toUpperCase() + listVal.slice(1); //capitalized the first letter
        //append
        list.append(newDiv)
        newDiv.append(newList)
        newList.append(document.createTextNode(listVal)) //append the li to the text from the form
        newDiv.append(delBtn) //append the button to the new list
        newDiv.append(checkBtn)//append the button to the new list
        newDiv.className = "list-container"
        delBtn.className = "delete-btn"; //provide class name for the btn
        checkBtn.className = "check-btn"; //provide class name for the btn
        newList.className = "list-class"; //provide class name for the new li's
        input.value = '';
        errMsg.textContent = '';
        
            
   } else {
       errMsg.textContent = "No input yet!";
       setTimeout(() => {
        errMsg.textContent = '';
       }, 2000)
   }
}


function checkDelete(event) {
     // This version checks the current element for a match, as well as it's parents.
    // If none is found, it returns null
    // if (event.target.matches('.list-class') || event.target.closest('.list-class')) {
    //     event.target.closest('.list-class').remove();
    // }
    const item = event.target;
    if(item.className === 'delete-btn') {
        const list = item.parentElement; //this will delete the parent element which is the li itself
        list.remove();
        if(list.length <= 0) {
            console.log('empty')
        }
        
    } else if(item.className === 'check-btn') {
        const text = item.parentElement;
        text.style.cssText = 'text-decoration: line-through; color: grey; border-left: 5px solid green'
    }

   
}



addButton.addEventListener('click', addNew);

// Instead of targeting an element, we target a static parent -- I've chosen
// body since it's always there, but in bigger applications it's better to 
// target a more specific parent
list.addEventListener('click', checkDelete)


