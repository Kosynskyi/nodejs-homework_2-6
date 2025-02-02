const { User } = require("../../models/user");

const { httpError } = require("../../helpers");

const verify = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });

  if (!user) {
    throw httpError(404);
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });

  res.json({
    message: "Verify success",
  });
};

module.exports = verify;
