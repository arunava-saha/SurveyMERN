const express = require("express");
const { getAUser, getAllUsers, servay } = require("../controllers/user");
const verify = require("../config/verify");
const Router = express.Router();

Router.post("/survey", servay);
Router.get("/:id", verify, getAUser);
Router.get("/1/:id", getAUser);
Router.get("/", getAllUsers);

module.exports = Router;
