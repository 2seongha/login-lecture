"use strict";

const UserStorage = require("./UserStorage");

class User{
  constructor(body){
    this.body = body;
  }
  async login(){
    const body = this.body;
    try{
      const user = await UserStorage.getUsersInfo(body.id);
      if(user){
        if(user.id === body.id && user.password === body.password){
          return {success:true,msg:user.id};
        }
        return {success:false,msg:"비밀번호가 틀렸습니다."};
      }
      return {success:false,msg:"존재하지 않는 아이디입니다."};
    }catch(err){
      return {success:false,err};
    }
  }


  async register(){
    const body = this.body;
    try{
      const response = await UserStorage.addUser(body);
      return response;
    }catch(err){
      return {success:false,err};
    }
  }
}

module.exports = User;