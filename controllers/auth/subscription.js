const { User } = require("../../models/user");

const { httpError } = require("../../helpers");

const subscription = async (req, res) => {
  const { id } = req.params;
  const { subscription } = req.body;

  if (!subscription) {
    throw httpError(400, "Bad request");
  }

  const user = await User.findByIdAndUpdate(
    id,
    { subscription },
    { new: true }
  );

  res.json(user);
};

module.exports = subscription;
