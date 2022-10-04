const db = require("../models");
const Ads = db.ads;

// Retrieves all data from the database.
exports.findAll = (req, res) => {
  const id = req.query._id;
  var condition = id ? { id: { $regex: new RegExp(id), $options: "i" } } : {};

  Ads.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Finds a single ads with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Ads.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found ads with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving ads with id=" + id });
    });
};

