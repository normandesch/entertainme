module.exports = {
  index(req, res, next) {
    res.render("static/index");
  },
  tour(req, res, next) {
    res.render("static/tour");
  }

};
