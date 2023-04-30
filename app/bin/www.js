"use strict";

const app = require("../app")
const logger = require("../src/config/logger")
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  logger.info(`서버 ON | 포트:${process.env.PORT}`)
});