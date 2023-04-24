"use strict";

const fs = require("fs").promises;

class UserStorage {
  static #getUsersInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static #getUsers(data, ...fields) {
    const users = JSON.parse(data);
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsers(...fields) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUsers(data, ...fields);
      })
      .catch(console.error);
  };

  static getUsersInfo(id) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUsersInfo(data, id);
      })
      .catch(console.error)
  };

  static async addUser(userinfo) {
    const users = await this.getUsers("id", "password", "name");
    users.id.push(userinfo.id);
    users.password.push(userinfo.password);
    users.name.push(userinfo.name);
    return fs.writeFile("./src/databases/users.json", JSON.stringify(users));
  };
}

module.exports = UserStorage;