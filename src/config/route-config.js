module.export = {
  init(app){
    const staticRoute = require("../routes.static");
    app.use(staticRoutes);
  }
}
