import { repositoryBase } from './repositoryBase';
import { users } from '../models/base/users';
import { Model } from 'sequelize';
import * as userModel from '../models/userModel';

export class userRepository extends repositoryBase {
  constructor(model: users | null = null) {
    super(model);
  }

  async create(
    noticeId: string,
    userId: string,
    channelId: string
  ) {
    this.generateUlid();
    this._model = await userModel.register(
      this._id, noticeId, userId, channelId
    );
  }

  getUserId(): string {
    return this._model.userId;
  }






}
