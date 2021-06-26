const path = require("path");
const multer = require("multer");
const fs = require("fs");

exports.SaveGet = (req, res) => {
  res.render("index");
};
exports.SavePost = (req, res) => {
  res.redirect('/');
};
