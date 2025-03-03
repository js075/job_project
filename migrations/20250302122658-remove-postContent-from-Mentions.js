export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Mentions", "mentionPostId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Posts", 
        key: "id",
      },
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Mentions", "mentionPostId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Users", 
        key: "id",
      },
      onDelete: "CASCADE",
    });
  },
};
