import { DataTypes } from "sequelize";

export default {
  async up(queryInterface) {
    await queryInterface.createTable("Jobs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,

      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,

      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,

      },
      salary: {
        type: DataTypes.INTEGER,
        allowNull: false,

      },
      location: {
        type:DataTypes.STRING,
            allowNull:false,
      },
      experienceLevel: {
        type:DataTypes.INTEGER,
            allowNull:false,
      },
      expireDate: {
        type:DataTypes.DATE,
            allowNull:false,
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
    await queryInterface.dropTable("Jobs");
  },
};
