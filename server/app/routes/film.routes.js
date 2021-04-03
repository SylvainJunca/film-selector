module.exports = app => {
    const films = require("../controllers/film.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Film
    router.post("/", films.create);
  
    // Retrieve all films
    router.get("/", films.findAll);
  
    // Retrieve a single Film with id
    router.get("/:id", films.findOne);
  
    // Update a Film with id
    router.put("/:id", films.update);
  
    // Delete a Film with id
    router.delete("/:id", films.delete);
  
  
    app.use('/api/films', router);
  };