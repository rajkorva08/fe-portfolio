const { saveContact } = require("../daos/contactDAO");

const handleContactSubmission = async ({ name, email, message }) => {
  if (!name || !email) {
    throw new Error("Name and email are required.");
  }
  const contact = await saveContact({ name, email, message });
  return contact;
};

module.exports = { handleContactSubmission };
