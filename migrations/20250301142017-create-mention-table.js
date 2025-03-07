
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Mentions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      postContent: {
        type: Sequelize.TEXT,
        allowNull:false
      },
      mentionedCommentId:{
        type:Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Comments",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      mentionPostId:{
        type:Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      mentionedUserId:{
        type:Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("Mentions");
  }
};
