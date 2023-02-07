//creating the current date
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const date = new Date();
const day = date.getDay();
const currentDate = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const FullDate = `${days[day]} ${currentDate} ${months[month]} ${year}`;

// add task to the task list by pressing Enter on the keyboard
document.querySelector("#input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const input = document.querySelector("#input");
    addItem(input.value);
  }
});

// add task to the task list by clicking
document.querySelector("#submit_item").addEventListener("click", () => {
  const input = document.querySelector("#input");
  addItem(input.value);
});

// create all dynamic elements
addItem = (input) => {
  const item = document.createElement("div");
  const div = document.createElement("div");
  const completedTaskIcon = document.createElement("i");
  const editTaskIcon = document.createElement("i");
  const deleteTaskIcon = document.createElement("i");
  const text = document.createElement("p");
  const editedText = document.createElement("p");
  const dateValue = document.createElement("span");

  // insert classnames and textcontent to particular node
  item.className = "item";
  text.textContent = input;

  //Giving completedtask element a classname, style and action
  completedTaskIcon.className = "fas fa-check-circle";
  completedTaskIcon.style.color = "darkgray";
  completedTaskIcon.addEventListener("click", () => {
    completedTaskIcon.style.color = "limegreen";
  });

  item.appendChild(completedTaskIcon);

  // Add current Date to each task
  dateValue.textContent = FullDate;
  div.appendChild(dateValue);

  // Giving EditTask element a classname, style and action
  editTaskIcon.className = "fas fa-edit";
  editTaskIcon.style.color = "darkgray";
  editTaskIcon.style.padding = "2px";

  // prompt dialog box to update task
  function updatePrompt() {
    let previousTextContent = text.textContent;
    let updateTask = prompt("Update Task:", previousTextContent);
    if (updateTask == null || updateTask == "") {
      editedText.textContent = previousTextContent;
    } else {
      editedText.textContent = updateTask;
    }
  }
  // call function and replace existing text
  editTaskIcon.addEventListener("click", () => {
    updatePrompt();
    item.replaceChild(editedText, text);
  });

  // click edit icon to update task
  div.appendChild(editTaskIcon);

  // Giving deletedTask element a classname, style and action
  deleteTaskIcon.className = "fas fa-trash";
  deleteTaskIcon.style.color = "darkgray";
  deleteTaskIcon.addEventListener("click", () => {
    item.remove();
  });

  // click delete icon to delete task
  div.appendChild(deleteTaskIcon);

  // add text to item div
  item.appendChild(text);
  item.appendChild(div);

  //  add task to the document
  document.querySelector("#to_do_list").appendChild(item);
};
