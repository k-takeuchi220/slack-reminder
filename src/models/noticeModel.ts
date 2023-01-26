const Sequelize = require('sequelize');
const Op = Sequelize.Op;
import { sequelize } from '../utils/mysql';
import * as date from '../utils/date';
import * as base from './base/notices';

export const delimiter = ",";
const limit = 1000;

const noticeModel = base.notices.initModel(sequelize);

export async function searchByUnnotified() {

  return await noticeModel.findAll({
    where: {
      'nextNoticedAt': {
        [Op.lt]: date.now()
      }
    },
    limit: limit,
  })
}

export async function searchByTeamIdUserId(teamId: string, userId: string, limit: number) {

  return await noticeModel.findAll({
    where: {
      'teamId': teamId,
      'registerUserId': userId
    },
    limit: limit,
  })
}


export async function register(
  id: string,
  userId: string,
  message: string,
  teamId: string,
  settings: string[]
): Promise<base.notices> {
  let now: Date = date.now().toDate();
  let nextNoticedAt: Date = date.getNextNoticedAt(now, settings).toDate();

  return await noticeModel.create({
    'id': id,
    'registerUserId': userId,
    'teamId': teamId,
    'message': message,
    'settings': settings.join(delimiter),
    'createdAt': now,
    'nextNoticedAt': nextNoticedAt
  })
}
