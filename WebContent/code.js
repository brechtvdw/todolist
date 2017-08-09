/**
 * 
 */
var todoItem;
var todoList;

function addTodo()
{
	todoItem = document.getElementById("fld-input-todo").value;
	todoList = document.getElementById("ul-todo-list");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(todoItem));
	li.setAttribute("id", "li-todo-item-1"); // added line
	todoList.appendChild(li);	
	var todoForm = document.getElementById("frm-input-todo");
	todoForm.reset();
}