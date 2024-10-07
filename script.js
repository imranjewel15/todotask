const inputBoxField = document.querySelector("#inputBoxField");
const listContainer = document.querySelector("#listContainer");
function myFunc() {
  if (inputBoxField.value === "") {
    alert("Please type your todo list");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBoxField.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "&#9986";
    li.appendChild(span);
  }
  inputBoxField.value = "";
  saveData();
}

inputBoxField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function getTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
getTask();
