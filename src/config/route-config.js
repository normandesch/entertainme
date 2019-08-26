module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const talentsRoutes = require("../routes/talents");
    const userRoutes = require("../routes/users")
    const circusRoutes = require("../routes/circus");
    const comedyRoutes = require("../routes/comedy");
    const danceRoutes = require("../routes/dance");
    const dragRoutes = require("../routes/drag");
    const magicRoutes = require("../routes/magic");
    const musicRoutes = require("../routes/music")

    app.use(staticRoutes);
    app.use(talentsRoutes);
    app.use(userRoutes);
    app.use(circusRoutes);
    app.use(comedyRoutes);
    app.use(danceRoutes);
    app.use(dragRoutes);
    app.use(magicRoutes);
    app.use(musicRoutes);
  }
}
