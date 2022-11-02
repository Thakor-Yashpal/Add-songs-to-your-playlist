"use strict";

var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function listLength() {
  return item.length;
}

function createListElement() {
  var li = document.createElement("li"); // creates an element "li"

  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  function crossOut() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", crossOut); // START ADD DELETE BUTTON

  var dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem); // END ADD DELETE BUTTON

  function deleteListItem() {
    li.classList.add("delete");
  } //END ADD CLASS DELETE

}

function addListAfterClick() {
  if (inputLength() > 0) {
    //makes sure that an empty input field doesn't create a li
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which === 13) {
    //this now looks to see if you hit "enter"/"return"
    //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
    createListElement();
  }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
//# sourceMappingURL=new.dev.js.map
