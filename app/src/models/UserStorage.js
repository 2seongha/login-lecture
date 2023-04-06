"use strict";

class UserStorage{
  static #users = {
    id: ["이성하","이성하2","이성하3"],
    password: ["1234","1234","1234"],
    name: ['민수','철수','영희'],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if(users.hasOwnProperty(field)){
        newUsers[field] = users[field];
      }
      return newUsers;
    },{});
    return newUsers;
  };
  
  static getUsersInfo(id){
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser,info)=>{
      newUser[info] = users[info][idx];
      return newUser;
    },{});
    return userInfo;
  };

  static addUser(user){
    const users = this.#users;
    users.id.push(user.id);
    users.password.push(user.password);
    users.name.push(user.name);
  };
}

module.exports = UserStorage;