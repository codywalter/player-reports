// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
// const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  // LOGIN
  app.get("/login", (req, res) => {
    res.render("login", {
      main: "main.css",
      style: "login.css",
      script: "login.js",
    });
  });

  // PLAYER - HOMEPAGE ONCE LOGGED IN
  app.get("/", (req, res) => {
    res.render("player", {
      main: "main.css",
      style: "player.css",
      script: "player.js",
    });
  });
};
