module.exports = app => {
    const bubbles = require("../controllers/film.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Bubble
    router.post("/", bubbles.create);
  
    // Retrieve all bubbles
    router.get("/", bubbles.findAll);
  
    // Retrieve a single Bubble with id
    router.get("/:id", bubbles.findOne);
  
    // Update a Bubble with id
    router.put("/:id", bubbles.update);
  
    // Delete a Bubble with id
    router.delete("/:id", bubbles.delete);
  
  
    app.use('/api/bubbles', router);
  };