const { User } = require("../../models/user");

const { httpError, sendEmail } = require("../../helpers");

const { BASE_URL } = process.env;

const resendEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!email) {
    throw httpError(400, "missing required field email");
  }

  if (!user) {
    throw httpError(400, "Verification has already been passed");
  }

  const mail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click to verify</a>`,
  };

  await sendEmail(mail);

  res.status({
    message: "Verification email sent",
  });
};

module.exports = resendEmail;
