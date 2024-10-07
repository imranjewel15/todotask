const inputBoxField =document.querySelector("#inputBoxField");
const listContainer =document.querySelector("#listContainer");
function myFunc(){
    if (inputBoxField.value === ""){
        alert("Please type your todo list")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputBoxField.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "&#9986";
        li.appendChild(span);
    }
    inputBoxField.value="";
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false)