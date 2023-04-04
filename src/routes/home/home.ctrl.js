"use strict";

const login = function(req, res){
  res.render("home/login");
};

const home = function(req, res){
  res.render("home/index");
};

module.exports = {
  home,
  login,
};