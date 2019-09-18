module.exports = {
  init(app) {
    const staticRoutes = require("../routes/static");
    const talentsRoutes = require("../routes/talents");
    const userRoutes = require("../routes/users");

    app.use(staticRoutes);
    app.use(talentsRoutes);
    app.use(userRoutes);
  }
};
