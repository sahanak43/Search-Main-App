module.exports = app => {
  const ads = require("../controllers/ads.controller.js");

  var router = require("express").Router();

  
  // Retrieve all data
  router.get("/", ads.findAll);

  
  // Retrieve a single data with id
  router.get("/:id", ads.findOne);

  
  app.use("/api/ads", router);
};
