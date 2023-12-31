const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Activity', {
    ID:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    duration:{
      type: DataTypes.STRING
    },
    season:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    countries:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    }
  },
  {timestamps: false}
  );
};