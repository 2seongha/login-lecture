"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm-password");
const name = document.querySelector("#name");
const register_button = document.querySelector("#register-button");

register_button.addEventListener("click", register);

function register(){
  const req = {
    id: id.value,
    password: password.value,
    name: name.value,
  }
  if(!req.id||!req.password||!req.name){
    alert("빈칸을 입력하세요.");
    return;
  }
  if(password.value!==confirm_password.value){
    return alert("비밀번호가 일치하지 않습니다.");;
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
      location.href = "/login";
      alert("회원가입 성공");
    }else{
      alert(res.msg);
    }
  })
  .catch((err)=>{console.error(new Error("회원가입 중 error 발생"))});
}