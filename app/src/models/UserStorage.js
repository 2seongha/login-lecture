"use strict";

const db = require("../config/db")

class UserStorage {
  static getUsersInfo(id) {
    return new Promise((resolve,reject)=>{
      const query = `SELECT * FROM users WHERE id = ?;`;
      db.query(query,[id], (err,data)=>{
        if(err) reject(`${err}`);
        resolve(data[0]);
        })
    })
  };

  static async addUser(userinfo) {
    return new Promise((resolve,reject)=>{
      const query = "INSERT INTO users(id,name,password) VALUES(?,?,?);";
      db.query(query,[userinfo.id,userinfo.name,userinfo.password], (err)=>{
        if(err) reject(`${err}`);
        resolve({success:true});
        })
    })
  };
}

module.exports = UserStorage;