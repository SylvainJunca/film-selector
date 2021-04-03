const db = require("../models");
const User = db.users;

// Create and Save a new User
exports.create = (req, res) => {

  // Validate request
  if (!req.body.email || !req.body.password) {
    res.status(400).send({ message: "You need to pass an email and a password" });
    return;
  }

  const { name, email, password } = req.body;

  // Create a Tutorial
  const user = new User({
    name,
    email,
    password
  });

  // Save user in the database
  user
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
  
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {

  const name = req.query.name;
  var condition = name ? { title: { $regex: new RegExp(name), $options: "i" } } : {};

  User.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });

};

// Find a single User with an id
exports.findOne = (req, res) => {

  const id = req.params.id;

  User.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found User with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with id=" + id });
    });
  
};

// Update a User by the id in the request
exports.update = (req, res) => {

    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
    const id = req.params.id;

    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
        if (!data) {
        res.status(404).send({
            message: `Cannot update User with id=${id}. Maybe User was not found!`
        });
        } else res.send({ message: "User was updated successfully." });
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating User with id=" + id
        });
    });
  
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {

  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      } else {
        res.send({
          message: "User was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
  
};
