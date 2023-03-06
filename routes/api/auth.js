const express = require("express");

const controllers = require("../../controllers/auth");

const { controllerWrapper } = require("../../helpers");

const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/signup",
  validateBody(schemas.registerSchema),
  controllerWrapper(controllers.register)
);

router.post(
  "/login",
  validateBody(schemas.loginSchema),
  controllerWrapper(controllers.login)
);

router.get("/current", authenticate, controllerWrapper(controllers.getCurrent));

router.get("/logout", authenticate, controllerWrapper(controllers.logOut));

router.patch(
  "/users/:id/subscription",
  authenticate,
  validateBody(schemas.subscriptionSchema),
  controllerWrapper(controllers.subscription)
);

module.exports = router;
