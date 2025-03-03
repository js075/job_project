import { DataTypes } from "sequelize";

export default {
  async up(queryInterface) {
    await queryInterface.createTable("SavedJobs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      job_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Jobs",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      note: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        allowNull: false,
        type: DataTypes.ENUM("applied", "interviewing", "accepted", "rejected"),
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
    await queryInterface.dropTable("SavedJobs");
  },
};
