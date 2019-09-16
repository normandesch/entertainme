const talentQueries = require("../db/queries.talents");

module.exports = {
  index(req, res, next) {
    talentQueries.getAllTalents((err, talents) => {
      if (err) {
        res.redirect("/");
      } else {
        res.render("talents/index", {talents});
      }
    });
  }
};
