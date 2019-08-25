const express = require("express");
const app = express();
const appConfig = require("./config/route-config.js");
const routeConfig = require("./config/route-config.js");

appConfig.init();
routeConfig.init(app);

module.exports = app;