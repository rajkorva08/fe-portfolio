const Contact = require("../models/Contact");

const saveContact = async ({ name, email, message }) => {
  return await Contact.create({ name, email, message });
};

module.exports = { saveContact };
