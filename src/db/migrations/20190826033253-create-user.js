"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        unique: true,
        validate: {
          isEmail: { msg: "must be a valid email" }
        },
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },

      talent: {
        allowNull: false,
        type: Sequelize.STRING
      },

      firstName: {
        allowNull: false,
        type: Sequelize.STRING
      },

      lastName: {
        allowNull: false,
        type: Sequelize.STRING
      },

      stageName: {
        allowNull: false,
        type: Sequelize.STRING
      },

      location: {
        allowNull: false,
        type: Sequelize.STRING
      },

      image: {
        allowNull: false,
        type: Sequelize.STRING
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  }
};
