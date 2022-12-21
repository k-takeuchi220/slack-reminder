'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('notices', {
      id: {
        field: 'id',
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
      },
      userIds: {
        type: Sequelize.STRING,
      },
      message: {
        type: Sequelize.STRING,
      },
      settings: {
        type: Sequelize.STRING,
      },
      nextNoticedAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('notices');
  }
};
