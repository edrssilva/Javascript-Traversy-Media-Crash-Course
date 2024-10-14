//  --------------- ELEMENT SELECTORS --------------- //
// DOCUMENT - GET ELEMENT BY CLASS NAME / TAG NAME - QUERY SELECTOR ALL (RECOMMENDED)
// DOCUMENT - GET ELEMENT BY ID - QUERY SELECTOR (# . <>)

// userList.remove();
// userList.lastElementChild.remove();
// userList.firstElementChild.remove();
// userList.children[2].innerText = "Brad";
// userList.lastElementChild.innerHTML = "<h1>Title</h1>";
// userList.style.background = "red";
// userList.classList.add("bg-slate-700");
// userList.classList.remove("bg-slate-700");

const userForm = document.querySelector("#user-form");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const message = document.querySelector("#message");
const submitButton = document.querySelector("#submit-button");
const userList = document.querySelector("#users-list");

userForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  console.log(usernameInput.value);
  console.log(emailInput.value);

  if (usernameInput.value.length == 0 || emailInput.value.length == 0) {
    message.classList.remove("hidden");
    message.classList.add("text-red-500");
    message.innerHTML = "Please enter all fields";

    setTimeout(() => message.classList.add("hidden"), 3000);
  } else {
    userList.classList.remove("hidden");
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${usernameInput.value} - ${emailInput.value}`)
    );
    userList.appendChild(li);

    usernameInput.value = "";
    emailInput.value = "";
  }
}
