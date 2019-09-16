const User = require("./models").User;
const Talent = require("./models").Talent;
const Entertainer = require("./models").Entertainer;
const bcrypt = require("bcryptjs");


module.exports = {
  createUser(newUser, callback) {
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(newUser.password, salt);

      if(newUser.password.length < 6 || newUser.password !== newUser.passwordConfirmation){
        callback(err);
      } else {
          return User.create({
            email: newUser.email,
            password: hashedPassword
          })
            .then(user => {
              callback(null, user);
          })
              .catch(err => {
              callback(err);
          });
      }
    }
};
