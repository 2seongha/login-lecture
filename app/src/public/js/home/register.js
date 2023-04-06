"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const name = document.querySelector("#name");
const register_button = document.querySelector("#register-button");

register_button.addEventListener("click", register);

function register(){
  const req = {
    id: id.value,
    password: password.value,
    name: name.value,
  }
  

  fetch("/register",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req),
  })
  .then((res)=>{return res.json();})
  .then((res)=>{
    if(res.success){
      location.href = "/";
    }else{
      alert(res.msg);
    }
  })
  .catch((err)=>{console.error(new Error("회원가입 중 error 발생"))});
}