const contacts = require("../../models/contacts");
const { httpError } = require("../../helpers");

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    throw httpError(404, "Not found");
  }
  res.json(result);
};

module.exports = getContactById;
