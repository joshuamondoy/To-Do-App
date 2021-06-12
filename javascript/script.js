const input = document.querySelector('[data-new-item]')
const addButton = document.querySelector("#add-button")
const list = document.querySelector(".saved-list")
const heading = document.querySelector(".heading")
const errMsg = document.querySelector(".errMsg");
const listItem = document.querySelector(".list-class")

function addNewList() {
    if(input.value !== '') { //if not empty
        let newList = document.createElement("li") //create new li
        let listVal = input.value; //get the value from form
        const newbtn = document.createElement("button"); //create new button
        newbtn.innerText = "X"; //set label for the button
        listVal = listVal[0].toUpperCase() + listVal.slice(1); //capitalized the first letter
        newList.append(document.createTextNode(listVal)) //append the li to the text from the form
        newList.append(newbtn) //append the button to the new list
        newbtn.className = "delete-btn"; //provide class name for the btn
        newList.className = "list-class"; //provide class name for the new li's
        list.prepend(newList); //append to the first child
        input.value = '';
        errMsg.textContent = '';
        document.querySelector('.empty').innerText = ''; //default text upon load
       
   
   } else {
       errMsg.textContent = "No input yet!";
       setTimeout(() => {
        errMsg.textContent = '';
       }, 2000)
   }
}

function deleteList() {
    newbtn.textContent = '';
}
addButton.addEventListener('click', addNewList);




