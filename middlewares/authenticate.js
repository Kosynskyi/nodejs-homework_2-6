const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const { httpError } = require("../helpers");

const { User } = require("../models/user");

const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    next(httpError(401, "Not authorized"));
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    if (!user) {
      next(httpError(401, "User not found"));
    }

    if (!user.token) {
      next(httpError(401));
    }

    req.user = user;

    next();
  } catch (error) {
    next(httpError(401));
  }
};

module.exports = authenticate;
