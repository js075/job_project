import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const SavedJob = sequelize.define(
  "SavedJob",
  {
    userId: {  
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
    jobId: {  
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Jobs",
        key: "id",
      },
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {  
      type: DataTypes.ENUM("applied", "saved", "accepted", "rejected"),
      allowNull: false,
    },
  },
  {
    timestamps: true
  }
);

export default SavedJob;
