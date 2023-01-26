import { ulid } from 'ulid'
import { Model } from 'sequelize';

export abstract class repositoryBase {
  _id: string;
  _model: any;
  constructor(model: any | null) {
    if (model !== null) {
      this._model = model;
      this._id = model['id'];
    }
  }

  generateUlid(): string {
    this._id = ulid();
    return this._id;
  }

  isCreate(): boolean {
    return this._model !== null;
  }

  getId(): string {
    return this._id;
  }

}
