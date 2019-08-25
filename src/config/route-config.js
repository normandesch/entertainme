module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const talentsRoutes = require("../routes/talents");
    app.use(staticRoutes);
    app.use(talentsRoutes);
  }
}
