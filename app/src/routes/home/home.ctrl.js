"use strict";

const User = require("../../models/User");

const output = {
  login: (req, res)=>{
    res.render("home/login");
  },
  home: (req, res)=>{
    res.render("home/index");
  },
}

const process = {
  login: (req,res)=>{
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
}

module.exports = {
  output,
  process,
};