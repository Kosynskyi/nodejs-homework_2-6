const express = require("express");

const controllers = require("../../controllers/auth");

const { controllerWrapper } = require("../../helpers");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/signup",
  validateBody(schemas.registerSchema),
  controllerWrapper(controllers.register)
);

router.get("/verify/:verificationToken", controllerWrapper(controllers.verify));

router.post(
  "/verify",
  validateBody(schemas.verifySchema),
  controllerWrapper(controllers.resendEmail)
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

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  controllerWrapper(controllers.updateAvatar)
);

module.exports = router;
