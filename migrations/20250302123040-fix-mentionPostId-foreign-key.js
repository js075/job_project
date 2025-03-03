"use strict";

import { Sequelize } from "sequelize";
export const up = async (queryInterface) => {
  await queryInterface.changeColumn("Mentions", "mentionPostId", {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "Posts", 
      key: "id",
    },
    onDelete: "CASCADE",
  });
};

export const down = async (queryInterface) => {
  await queryInterface.changeColumn("Mentions", "mentionPostId", {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "Users", 
      key: "id",
    },
    onDelete: "CASCADE",
  });
};
