import { repositoryBase } from './repositoryBase';
import { notices } from '../models/base/notices';
import * as noticeModel from '../models/noticeModel';

export class noticeRepository extends repositoryBase {
  constructor(model: notices | null = null) {
    super(model);
  }

  async create(
    userId: string,
    message: string,
    workSpaceId: string,
    settings: string[]
  ) {
    this.generateUlid();
    this._model = await noticeModel.register(
      this._id, userId, message, workSpaceId, settings
    );
  }

  getSettings(): number[] {
    return this._model.settings.split(noticeModel.delimiter).map(Number);
  }

  getMessage(): string {
    return this._model.message;
  }
}
