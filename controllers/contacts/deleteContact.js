const { Contact } = require("../../models/contact");

const { httpError } = require("../../helpers");

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw httpError(404, "Not found");
  }

  res.json({
    message: "contact deleted",
  });
};

module.exports = deleteContact;
