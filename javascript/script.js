const input = document.querySelector('[data-new-item]')
const addButton = document.querySelector("#add-button")
const list = document.querySelector(".saved-list")
const heading = document.querySelector(".heading")
const errMsg = document.querySelector(".errMsg");



function addNewList() {
    if(input.value !== '') { //if not empty
        let newList = document.createElement("li") //create new li
        let listVal = input.value; //get the value from form
        const delBtn = document.createElement("button"); //create delete button
        const checkBtn = document.createElement("button")//create dash button
        delBtn.innerText = "✖"; //set label for the button
        checkBtn.innerText = "✔" //set label for dash button
        listVal = listVal[0].toUpperCase() + listVal.slice(1); //capitalized the first letter
        newList.append(document.createTextNode(listVal)) //append the li to the text from the form
        newList.append(delBtn) //append the button to the new list
        newList.append(checkBtn)//append the button to the new list
        delBtn.className = "delete-btn"; //provide class name for the btn
        checkBtn.className = "check-btn"; //provide class name for the btn
        newList.className = "list-class"; //provide class name for the new li's
        list.prepend(newList); //append to the first child
        input.value = '';
        errMsg.textContent = '';
        if(list.hasChildNodes() == true) {
           document.querySelector('.empty').innerText = '';
           
        } 
        
        
        
       
   
   } else {
       errMsg.textContent = "No input yet!";
       setTimeout(() => {
        errMsg.textContent = '';
       }, 2000)
   }
}




addButton.addEventListener('click', addNewList);

// Instead of targeting an element, we target a static parent -- I've chosen
// body since it's always there, but in bigger applications it's better to 
// target a more specific parent
document.querySelector('.saved-list').addEventListener('click', event => {
	
    // This version checks the current element for a match, as well as it's parents.
    // If none is found, it returns null
    if (event.target.matches('.list-class') || event.target.closest('.list-class')) {
    	event.target.closest('.list-class').remove();
        
    } 

});
//try either looping or creating function to check if li's are empty


