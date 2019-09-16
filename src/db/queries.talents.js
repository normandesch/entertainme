const Talent = require("./models").Talent;

module.exports = {

getAllTalents(callback){
  return Talent.findAll()
    .then(talents => {
      callback(null, talents);
    })
    .catch(err => {
          console.log(err);
        })
       }

}
