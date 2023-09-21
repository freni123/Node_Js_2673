const { contactService } = require("../services");
// create-contact
const createContact = async (req, res) => {
  try {
    const reqBody = req.body;
    const contact = await contactService.createContact(reqBody);
    if (!contact) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "contact created successfully!",
      data: contact,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// get contact list
const getContactList = async (req, res) => {
  try {
    const getContact = await contactService.getContactList(req, res);
    res.status(200).json({
      success: true,
      message: "contact details get successfully!",
      data: getContact,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// delete contact list
const deleteContact = async (req, res) => {
  try {
    const contactId = req.params.contactId;
    const contactExist = await contactService.getContactById(contactId);
    if (!contactExist) {
      throw new Error("contact not found!");
    }
    await contactService.deleteContact(contactId);
    res.status(200).json({
      success: true,
      message: "contact data delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// update contact data
const updateContact = async (req, res) => {
  try {
    const contactId = req.params.contactId;
    const contactExist = await contactService.getContactById(contactId);
    if (!contactExist) {
      throw new Error("contact not found!");
    }
    await contactService.updateContact(contactId, req.body);
    res.status(200).json({
      success: true,
      message: "contact data update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createContact,
  getContactList,
  deleteContact,
  updateContact,
};
