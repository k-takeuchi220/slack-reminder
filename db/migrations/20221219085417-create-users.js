'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        field: 'id',
        type: Sequelize.STRING(26),
        primaryKey: true,
      },
      noticeId: {
        type: Sequelize.STRING(26),
        comment: 'notices.id',
      },
      userId: {
        type: Sequelize.STRING(11),
        comment: '通知先ユーザID',
      },
      channelId: {
        type: Sequelize.STRING(11),
        comment: '通知先チャンネルID',
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
    },
      {
        uniqueKeys: {
          noticeId_userIdIndex: {
            fields: ['noticeId', 'userId']
          }
        }
      })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
