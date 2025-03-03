import { DataTypes } from "sequelize";

export default {
  async up(queryInterface) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull:false
      },
      email: {
        type: DataTypes.STRING,
        allowNull:false
      },
      password: {
        type: DataTypes.STRING,
        allowNull:false
      },

      otp:{
        type:DataTypes.STRING,
        allowNull:true
      },
      otpExpires:{
        type:DataTypes.DATE,
        allowNull:true
      },
      
createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("Users");
  },
};
