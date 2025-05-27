const { handleContactSubmission } = require("../services");

const submitContact = async (req, res, next) => {
  try {
    const contact = await handleContactSubmission(req.body);
    res.status(201).json({ message: "Contact submitted", data: contact });
  } catch (error) {
    next(error);
  }
};

module.exports = { submitContact };
