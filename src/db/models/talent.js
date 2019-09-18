"use strict";
module.exports = (sequelize, DataTypes) => {
  const Talent = sequelize.define(
    "Talent",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {}
  );
  Talent.associate = function(models) {
    // associations can be defined here
  };
  return Talent;
};
