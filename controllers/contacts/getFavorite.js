const { Contact } = require("../../models/contact");

const getFavorite = async (req, res) => {
  //   const { _id: owner } = req.user;
  //   console.log("owner", owner);

  const favorite = req.query.favorite;
  console.log(33333333333);
  const filter = {};

  if (favorite === true) {
    filter.favorite = favorite;
  }

  const contacts = await Contact.find(filter);

  res.json(contacts);

  console.log("req.query======>", req.query);
};

module.exports = getFavorite;
