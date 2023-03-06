const { User } = require("../../models/user");

const { httpError } = require("../../helpers");

const logOut = async (req, res) => {
  const { _id } = req.user;

  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw httpError(401, "Not authorized");
  }

  await User.findByIdAndUpdate(_id, { token: null });

  res.status(204).json({
    message: "Logout success",
  });
};

module.exports = logOut;
