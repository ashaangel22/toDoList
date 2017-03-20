function createToDoItem(toDoList, toDoValue) {
	var toDoItem = document.createElement("li"); 
	var textContainer = document.createElement("span");

	toDoItem.classList.add("todo-item");

	toDoList.appendChild(toDoItem);

	var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.id = "filled-in-box";
        checkbox.classList.add("filled-in");
        checkbox.name = "todo[]";
    
    var label = document.createElement("label");
		label.classList.add("filled-in-box");
		label.htmlFor = "checkbox";
    
    toDoItem.appendChild(checkbox);
    toDoItem.appendChild(label);
    toDoItem.appendChild(textContainer);
    textContainer.innerHTML = toDoValue;

    var deleteButton = document.createElement("a");
    deleteButton.classList.add("secondary-content", "delete-btn");
    var deleteIcon = document.createElement("i");
    deleteIcon.classList.add("material-icons");
    
    deleteIcon.innerHTML = "delete_forever";
    toDoItem.appendChild(deleteButton);
    deleteButton.appendChild(deleteIcon);

	label.addEventListener("click", done);
	deleteButton.addEventListener("click", deleteItem);

	updateCounter();


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
        var checkboxes = document.getElementsByName("todo[]");
        var listItem = document.getElementsByName("todo-item");
	  
		for(var i=0; i<checkboxes.length; i++) {
			checkboxes[i].checked = true;
            checkboxes[i].parentElement.classList.add("done");
		} 
        
        updateCounter();
    }

    function showHide() {
        var doneItems = document.getElementsByClassName("done");
        var elem = showHideButton;

        for(var i=0;i< doneItems.length;i++) {
            doneItems[i].classList.toggle("hidden");
            
            if (elem.innerHTML=="Hide Completed") {
                elem.innerHTML = "Show Completed"; } else { elem.innerHTML = "Hide Completed"; }
            }
        
        updateCounter();
        
        }
        
    

    function deleteAll() {
        var doneItems = document.getElementsByClassName("done");
        
        var i = doneItems.length;
        while (i--) {
            doneItems[i].parentNode.removeChild(doneItems[i]);
        } 
        
        updateCounter();
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


