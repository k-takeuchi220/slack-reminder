import { notices } from '../models/base/notices';
import { Model } from 'sequelize';
import * as noticeModel from '../models/noticeModel';
import { noticeRepository } from '../repositories/noticeRepository';
import { userRepository } from '../repositories/userRepository';
import * as slackService from '../services/slackService';

export class taskManager {
  _noticeRepo: noticeRepository;
  _userRepos: userRepository[];

  constructor(
    noticeRepo: noticeRepository,
    userRepos: userRepository[]
  ) {
    this._noticeRepo = noticeRepo;
    this._userRepos = userRepos;
  }

  getUserIds(): string[] {
    let userIds: string[] = [];
    console.log('JJJ', Object.keys(this._userRepos).length);
    for (const key in this._userRepos) {
      userIds.push(this._userRepos[key].getUserId());
    }
    return userIds;
  }

  getSettings(): number[] {
    return this._noticeRepo.getSettings();
  }

  getMessage(): string {
    return this._noticeRepo.getMessage();
  }
}
