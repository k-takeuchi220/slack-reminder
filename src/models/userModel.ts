const Sequelize = require('sequelize');
const Op = Sequelize.Op;
import { sequelize } from '../utils/mysql';
import * as base from './base/users';

const userModel = base.users.initModel(sequelize);

export async function searchByNoticeIds(noticeIds: string[]) {
  console.log(noticeIds);
  return await userModel.findAll({
    where: {
      'noticeId': {
        [Op.in]: noticeIds
      }
    }
  })
}

export async function register(
  id: string,
  noticeId: string,
  userId: string,
  channelId: string
) {
  return await userModel.create({
    'id': id,
    'noticeId': noticeId,
    'userId': userId,
    'channelId': channelId,
  })
}
