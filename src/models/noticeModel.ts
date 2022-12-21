const Sequelize = require('sequelize');
const Op = Sequelize.Op;
import { sequelize } from '../utils/mysql';
import * as date from '../utils/date';
import * as base from './base/notices';

const DELIMITER = ",";
const LIMIT = 1000;

const notices = base.notices.initModel(sequelize);

export const searchByUnnotified = async function () {

  return await notices.findAll({
    where: {
      'nextNoticedAt': {
        [Op.lt]: date.now()
      }
    },
    limit: LIMIT,
    attributes: ['userIds', 'message', 'settings', 'createdAt']
  })
}

export const register = async function (userIds: string, message: string, settings: Array<string>) {
  let now: Date = date.now().toDate();
  let nextNoticedAt: Date = date.getNextNoticedAt(now, settings).toDate();

  return await notices.create({
    'userIds': userIds,
    'message': message,
    'settings': settings.join(DELIMITER),
    'createdAt': now,
    'nextNoticedAt': nextNoticedAt
  })
}
