require("dotenv").config();
const User = require("./models").User;
const Talent = require("./models").Talent;
const bcrypt = require("bcryptjs");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  createUser(newUser, callback) {
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(newUser.password, salt);

    let image;

    if (newUser.talent == "Magic") {
      image = "../assets/css/magic.jpg";
    } else if (newUser.talent == "Music") {
      image = "../assets/css/music.jpg";
    } else if (newUser.talent == "Dance") {
      image = "../assets/css/dance.jpg";
    } else if (newUser.talent == "Drag") {
      image = "../assets/css/drag.jpg";
    } else if (newUser.talent == "Comedy") {
      image = "../assets/css/comedy.jpg";
    } else if (newUser.talent == "Circus") {
      image = "../assets/css/circus.jpg";
    }

    return User.create({
      email: newUser.email,
      password: hashedPassword,
      talent: newUser.talent,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      stageName: newUser.stageName,
      location: newUser.location,
      image: image
    })
      .then(user => {
        const msg = {
          to: newUser.email,
          from: "donotreply@example.com",
          subject: "Account confirmation",
          text: "Welcome to EntertainMe!",
          html: "<strong>Please login to start creating your profile!</strong>"
        };
        sgMail.send(msg);
        callback(null, user);
      })
      .catch(err => {
        callback(err);
      });
  },

  getUser(id, callback) {
    let result = {};
    User.findByPk(id)
      .then(user => {
        if (user == null) {
          calback(404);
        } else {
          console.log("cat");
          result["user"] = user;
          callback(null, result);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
