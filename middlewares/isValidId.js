const { isValidObjectId } = require("mongoose");

const { httpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    next(httpError(400, "Not valid id"));
  }
  next();
};

module.exports = isValidId;
