import { userRepository } from '../repositories/userRepository';
import { notices } from '../models/base/notices';
import * as userModel from '../models/userModel';
import { users } from '../models/base/users';

export async function searchByNoticeIds(noticeIds: string[]) {
  let users: userRepository[] = [];
  let models: Promise<users[]> = userModel.searchByNoticeIds(noticeIds);

  for (const model of await models) {
    if (!users[model.noticeId]) {
      users[model.noticeId] = [];
    }
    users[model.noticeId][model.id] = new userRepository(model)
  };

  return users;
}
