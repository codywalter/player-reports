// const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define("Player", {
    planeScore: {
      type: DataTypes.INTEGER,
    },
    connectionScore: {
      type: DataTypes.INTEGER,
    },
    rotationScore: {
      type: DataTypes.INTEGER,
    },
    batSpeed: {
      type: DataTypes.DECIMAL,
    },
    rotationalAcceleration: {
      type: DataTypes.DECIMAL,
    },
    onPlaneEfficency: {
      type: DataTypes.INTEGER,
    },
    attackAngle: {
      type: DataTypes.INTEGER,
    },
    earlyConnection: {
      type: DataTypes.INTEGER,
    },
    connectionAtImpact: {
      type: DataTypes.INTEGER,
    },
    verticalBatAngle: {
      type: DataTypes.INTEGER,
    },
    power: {
      type: DataTypes.DECIMAL,
    },
    timeToContact: {
      type: DataTypes.DECIMAL,
    },
    peakHandSpeed: {
      type: DataTypes.DECIMAL,
    },
  });
  return Player;
};
