const contactRoutes = require("./contactRoutes");

module.exports = (app) => {
  app.use("/api/contacts", contactRoutes);
};
