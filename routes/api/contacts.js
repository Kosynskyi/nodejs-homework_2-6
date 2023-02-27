const express = require("express");

const controllers = require("../../controllers/contacts");

const { controllerWrapper } = require("../../helpers");

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", controllerWrapper(controllers.listContacts));

router.get(
  "/:contactId",
  isValidId,
  controllerWrapper(controllers.getContactById)
);

router.post(
  "/",
  validateBody(schemas.addSchema),
  controllerWrapper(controllers.addContact)
);

router.delete(
  "/:contactId",
  isValidId,
  controllerWrapper(controllers.deleteContact)
);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  controllerWrapper(controllers.updateContact)
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  controllerWrapper(controllers.updateFavorite)
);

module.exports = router;
