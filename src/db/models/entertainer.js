'use strict';
module.exports = (sequelize, DataTypes) => {
  const Entertainer = sequelize.define('Entertainer', {
    name: DataTypes.STRING,
    talent: DataTypes.STRING,
    source: DataTypes.STRING,
    information: DataTypes.STRING
  }, {});
  Entertainer.associate = function(models) {
    // associations can be defined here
  };
  return Entertainer;
};