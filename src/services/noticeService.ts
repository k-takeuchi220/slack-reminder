import * as noticeModel from '../models/noticeModel';
import * as slackService from './slackService';
import * as noticeSearcher from '../searcher/noticeSearcher';
import * as userSearcher from '../searcher/userSearcher';
import { noticeRepository } from '../repositories/noticeRepository';
import { userRepository } from '../repositories/userRepository';
import { taskManager } from '../manager/taskManager';

export async function tryNotices() {
  let models = await noticeModel.searchByUnnotified();
  // TODO
}

export async function register(
  registerUserId: string,
  noticeUserIds: string[],
  message: string,
  teamId: string,
  settings: string[],
): Promise<void> {

  let noticeRepo = new noticeRepository();
  noticeRepo.create(registerUserId, message, teamId, settings);

  let noticeId = noticeRepo.getId();
  let userRepoList = [];
  for (const userId of noticeUserIds) {
    let channelId: string = await slackService.getChannelId(userId);
    if (channelId === '') {
      continue;
    }
    userRepoList[userId] = new userRepository();
    userRepoList[userId].create(noticeId, userId, channelId);
  }
}

export async function getTaskList(
  userId: string,
  teamId: string,
  limit: number = 10
): Promise<taskManager[]> {
  let taskList: taskManager[] = [];

  let notices: noticeRepository[] = await noticeSearcher.searchByTeamIdUserId(teamId, userId, limit);

  let noticeIds = Object.keys(notices);
  let users: userRepository[] = await userSearcher.searchByNoticeIds(noticeIds);

  for (const noticeId of noticeIds) {
    taskList[noticeId] = new taskManager(notices[noticeId], users[noticeId]);
  }

  return taskList;
}
