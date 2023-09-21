const { Contact } = require("../models");

// create-Contact
const createContact = async (reqBody) => {
  return Contact.create(reqBody);
};
// get Contact list
const getContactList = async (req, res) => {
  return Contact.find();
};
// get Contact details by id
const getContactById = async (contactId) => {
  return Contact.findById(contactId);
};
// delete Contact
const deleteContact = async (contactId) => {
  return Contact.findByIdAndDelete(contactId);
};
// update Contact
const updateContactId = async (contactId, updateBody) => {
  return Contact.findByIdAndUpdate(contactId, { $set: updateBody });
};
module.exports = {
  createContact,
  getContactList,
  getContactById,
  deleteContact,
  updateContactId,
};
