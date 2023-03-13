const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { httpError } = require("../../helpers");

const { User } = require("../../models/user");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarDir, filename);
  await fs.rename(tempUpload, resultUpload);

  try {
    const avatar = await Jimp.read(resultUpload);
    await avatar.resize(250, 250).quality(60).write(resultUpload);
  } catch (error) {
    throw httpError(400);
  }

  const imageAvatar = await Jimp.read(resultUpload);
  const resizeAvatar = await imageAvatar.resize(250, 250);
  await resizeAvatar.write(resultUpload);

  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;
