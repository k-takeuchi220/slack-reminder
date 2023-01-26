'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('notices', {
      id: {
        field: 'id',
        type: Sequelize.STRING(26),
        primaryKey: true,
      },
      message: {
        type: Sequelize.STRING,
      },
      settings: {
        type: Sequelize.STRING(8),
        comment: '設定値(csv)',
      },
      nextNoticedAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      lastNoticedAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      registerUserId: {
        type: Sequelize.STRING(11),
        comment: '登録ユーザID',
      },
      teamId: {
        type: Sequelize.STRING(11),
        comment: '対象ワークスペース',
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
    }).then(
      () => queryInterface.addIndex('notices', ['nextNoticedAt'])
    )
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('notices');
  }
};
