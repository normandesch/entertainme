module.exports = {
  index(req, res, next) {
    res.render("static/index", {title: "Welcome to EntertainMe"});
  },
  about(req, res, next) {
    res.render("static/about")
  }
}
