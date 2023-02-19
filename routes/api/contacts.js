const express = require("express");

const controllers = require("../../controllers/contacts");
const { controllerWrapper } = require("../../helpers");
const { validateBody } = require("../../middlewares");

const schema = require("../../schemas/contacts");

const router = express.Router();

router.get("/", controllerWrapper(controllers.listContacts));

router.get("/:contactId", controllerWrapper(controllers.getContactById));

router.post(
  "/",
  validateBody(schema.addSchema),
  controllerWrapper(controllers.addContact)
);

router.delete("/:contactId", controllerWrapper(controllers.deleteContact));

router.put(
  "/:contactId",
  validateBody(schema.addSchema),
  controllerWrapper(controllers.updateContact)
);

module.exports = router;
