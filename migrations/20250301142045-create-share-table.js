
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Shares", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      shareType: {
        type: Sequelize.ENUM('whatsapp','facebook','instagram'),
        allowNull:false
      },
      sharePostId:{
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
    await queryInterface.dropTable("Shares");
  }
};
