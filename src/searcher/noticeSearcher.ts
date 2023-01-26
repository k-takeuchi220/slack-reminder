import { noticeRepository } from '../repositories/noticeRepository';
import { notices } from '../models/base/notices';
import * as noticeModel from '../models/noticeModel';

export async function searchByUnnotified() {
  let notices = [];
  let models: Promise<notices[]> = noticeModel.searchByUnnotified();
  for (const model of await models) {
    notices[model.id] = model;
  };

  return notices;
}

export async function searchByTeamIdUserId(
  teamId: string,
  userId: string,
  limit: number
): Promise<noticeRepository[]> {
  let notices: noticeRepository[] = [];
  let models: Promise<notices[]> = noticeModel.searchByTeamIdUserId(teamId, userId, limit);
  for (const model of await models) {
    notices[model.id] = new noticeRepository(model);
  };

  return notices;
}
