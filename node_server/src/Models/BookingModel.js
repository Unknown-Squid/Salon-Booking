const { DataTypes } = require("sequelize");
const sequelize = require('../../Configs/DBConfig');

const BookingReceipt = sequelize.define(
  "BookingReceipt",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, 
      primaryKey: true, 
      allowNull: false,
    },
    booking_id: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
    contact_number: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    date: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    time: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    stylist_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    stylist_image: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    service_type: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    upgrades: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    notes: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    promo_code: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    paying_method: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    transaction_number: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    status: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
  },
  {
    tableName: "booking_receipt",
    timestamps: true, 
    freezeTableName: true, 
    underscored: true, 
  }
);
  
module.exports = BookingReceipt;
