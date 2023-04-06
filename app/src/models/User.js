"use strict";

const UserStorage = require("./UserStorage");

class User{
  constructor(body){
    this.body = body;
  }
  login(){
    const body = this.body;
    const {id,password} = UserStorage.getUsersInfo(body.id);
    if(id){
      if(id === body.id && password === body.password){
        return {success:true};
      }
      return {success:false,msg:"비밀번호가 틀렸습니다."};
    }
    return {success:false,msg:"존재하지 않는 아이디입니다."};
  }
  register(){
    const body = this.body;
    const {id,password} = UserStorage.getUsersInfo(body.id);
    if(id){
      return {success:false,msg:"이미 존재하는 아이디 입니다."};
    }
    UserStorage.addUser(body);
    return {success:true}
  }
}

module.exports = User;