const { Contact } = require("../../models/contact");

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;

  const { page = 1, limit = 5 } = req.query;
  const skip = (page - 1) * limit;

  const { favorite } = req.query;

  if (favorite !== undefined) {
    const result = await Contact.find(
      { owner, favorite },
      "-createdAt -updatedAt",
      {
        skip,
        limit,
      }
    ).populate("owner", "name email");

    res.json(result);
  } else {
    const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
      skip,
      limit,
    }).populate("owner", "name email");

    res.json(result);
  }
};

module.exports = listContacts;
