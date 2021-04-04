const db = require("../models");
const Bubble = db.bubbles;

// Create and Save a new Bubble
exports.create = (req, res) => {

  const { nickname, userId } = req.body;

  // Create a Bubble
  const bubble = new Bubble({
    nickname,
    userId,
    membersId : [userId]
  });

  // Save bubble in the database
  bubble
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err)
      const statusCode = err._message === 'bubble validation failed' && 403;
      res.status(statusCode || 500).send({
        message:
          err.message || "Some error occurred while creating the Bubble."
      });
    });
  
};

// Retrieve all Films from the database.
exports.findAll = (req, res) => {

  const nickname = req.query.nickname;
  var condition = nickname ? { nickname: { $regex: new RegExp(nickname), $options: "i" } } : {};

  Bubble.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving films."
      });
    });

};

// Find a single Bubble with an id
exports.findOne = (req, res) => {

  const id = req.params.id;

  Bubble.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Bubble with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Bubble with id=" + id });
    });
  
};

// Update a Bubble by the id in the request
exports.update = (req, res) => {

    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
    const id = req.params.id;

    Bubble.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
        if (!data) {
        res.status(404).send({
            message: `Cannot update Bubble with id=${id}. Maybe Bubble was not found!`
        });
        } else res.send({ message: "Bubble was updated successfully." });
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating Bubble with id=" + id
        });
    });
  
};

// Delete a Bubble with the specified id in the request
exports.delete = (req, res) => {

  const id = req.params.id;

  Bubble.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Bubble with id=${id}. Maybe Bubble was not found!`
        });
      } else {
        res.send({
          message: "Bubble was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Bubble with id=" + id
      });
    });
  
};
