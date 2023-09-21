const express = require("express");
const { contactController } = require("../../controllers");

const router = express.Router();

// crete-contact
router.post("/crete-contact", contactController.createContact);
// get contact list
router.get("/contact-list", contactController.getContactList);
// delete contact
router.delete("/delete-contact/:contactId", contactController.deleteContact);
// update contact list
router.put("/update-contact/:contactId", contactController.updateContact);
module.exports = router;
