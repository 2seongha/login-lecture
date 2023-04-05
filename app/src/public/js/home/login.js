"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const login_button = document.querySelector("button");

login_button.addEventListener("click", login);

function login(){
  const req = {
    id: id.value,
    password: password.value,
  }
  console.log(req);
}