
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Reactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      reactionType: {
        type: Sequelize.ENUM('Like','Love','Happy','Sad','Angry','Celebrate','Funny'),
        allowNull:false
      },
      userId:{
        type:Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      postId:{
        type:Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Posts",
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
    await queryInterface.dropTable("Reactions");
  }
};
