function createToDoItem(toDoList, toDoValue) {
	var toDoItem = document.createElement("li"); 
	var textContainer = document.createElement("span");

	toDoItem.classList.add("todo-item");

	toDoList.appendChild(toDoItem);

	var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.value = 1;
        checkbox.name = "todo[]";
        
    toDoItem.appendChild(checkbox);
    toDoItem.appendChild(textContainer);
    textContainer.innerHTML = toDoValue;

    var deleteButton = document.createElement("button");
	    toDoItem.appendChild(deleteButton);
	    deleteButton.innerHTML = "X";


	checkbox.addEventListener("click", done);
	deleteButton.addEventListener("click", deleteItem);

	updateCounter();


}

function buttons() {
	var buttons = document.querySelector(".buttons");

	var markAllButton = document.createElement("button");
	    buttons.appendChild(markAllButton);
	    markAllButton.innerHTML = "Mark all Completed";

	var showHideButton = document.createElement("button");
	    buttons.appendChild(showHideButton);
	    showHideButton.innerHTML = "Hide Completed";

	var deleteAllButton = document.createElement("button");
	    buttons.appendChild(deleteAllButton);
	    deleteAllButton.innerHTML = "Delete All Completed";

	markAllButton.addEventListener("click", markAll);
	showHideButton.addEventListener("click", showHide);
	deleteAllButton.addEventListener("click", deleteAll);
    
    function markAll() {
//        var allItems = document.getElementsByClassName("input");
//        var checkboxes = document.getElementsByName('input');
//        var listItem = this.parentElement;
//        listItem.classList.toggle("done");
        
//        var checkedBox = document.getElementsByName('input');
//        console.log("doneItems");
//     
//        var checkboxes = document.getElementsByName("checkedBox");
//        for (var i = 0; i< checkboxes.length; i++) {
//            checkboxes[i].checked = true;
//            
//        checkboxes[i].parentElement.classList.add("done");
//        }
        
         var checkboxes = document.getElementsByName('input');
             if (element.checked) {
                 for (var i = 0; i < checkboxes.length; i++) {
                     if (checkboxes[i].type == 'checkbox') {
                         checkboxes[i].checked = true;
                     }
                 }
             } else {
                 for (var i = 0; i < checkboxes.length; i++) {
                     console.log(i)
                     if (checkboxes[i].type == 'checkbox') {
                         checkboxes[i].checked = false;
                     }
                 }
             }
        
    }

    function showHide() {
        var doneItems = document.getElementsByClassName("done");
        var elem = showHideButton;

        for(var i=0;i< doneItems.length;i++) {
            doneItems[i].classList.toggle("hidden");
            
            if (elem.innerHTML=="Hide Completed") {
                elem.innerHTML = "Show Completed"; } else { elem.innerHTML = "Hide Completed"; }
            }
        }
        
    

    function deleteAll() {
        var doneItems = document.getElementsByClassName("done");
        console.log(doneItems);

        for(var i=0;i< doneItems.length;i++) {
            doneItems[i].parentNode.removeChild(doneItems[i]);
        }
    }
}


function done() {
	var listItem = this.parentElement;
	listItem.classList.toggle("done");

	updateCounter();
}

function updateCounter() {
	var numberDone = document.querySelectorAll(".done").length;
	var totalItems = document.querySelectorAll(".todo-item").length;
	var counterComplete = document.querySelector(".counter p");

	counterComplete.innerHTML = numberDone + "/" + totalItems + " Completed";

}


function deleteItem(){
		var listItem = this.parentElement;
		listItem.parentNode.removeChild(listItem);

	updateCounter();

}

function toggleListVisibility(toDoList) {
	var listArea = document.querySelector(".list-area");
	if(toDoList.children.length >= 1) {
		listArea.classList.remove("hidden");
	} else {
		listArea.classList.add("hidden");
	}
}


window.onload = function () {
	buttons();
	var form = document.querySelector("form");
	form.addEventListener("submit", function(e) {
		e.preventDefault();

		var toDoList = document.querySelector(".todo-list");
		var formInput = document.querySelector("#item-input");
		var inputValue = formInput.value;
        
        
        if (inputValue.length == 0 || /^\s+$/.test(inputValue)) {
            document.getElementById("item-input").focus();
            alert("Empty entry!");
        } else {
            createToDoItem(toDoList, inputValue);
		    toggleListVisibility(toDoList);
        }
        
        localStorage.setItem(inputValue, formInput);

	});
}
