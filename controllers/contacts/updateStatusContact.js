const { Contact } = require("../../models/contact");

const { httpError } = require("../../helpers");

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params;
  const ObjKeysFromReqBody = Object.keys(req.body);

  if (ObjKeysFromReqBody.length === 0) {
    throw httpError(400, "missing field favorite");
  }

  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!result) {
    throw httpError(404, "Not found");
  }

  res.json(result);
};

module.exports = updateStatusContact;
