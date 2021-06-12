const input = document.querySelector('[data-new-item]')
const addButton = document.querySelector("#add-button")
const list = document.querySelector(".saved-list")
const heading = document.querySelector(".heading")
const errMsg = document.querySelector(".errMsg");
const listItem = document.querySelector(".list-class")

addButton.addEventListener('click', () => {
   if(input.value !== '') { //if not empty
        let newList = document.createElement("li") //create new li
        let listVal = input.value;
        listVal = listVal[0].toUpperCase() + listVal.slice(1); //capitalized the first letter
        newList.append(document.createTextNode(listVal)) //get the input from the form
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
});
