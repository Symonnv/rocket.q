const express = require("express");
const route = express.Router();

route.get("/", (req, res) => res.render("index"));
route.get("/create-pass", (req, res) => res.render("create-pass"));
route.get("/room", (req, res) => res.render("room"));

// format that the form has to pass information
// route.get("/room/:room/:question/:action");

module.exports = route;
