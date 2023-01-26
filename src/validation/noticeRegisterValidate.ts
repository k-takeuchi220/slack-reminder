import { validateBase } from './validateBase';
import { settingKeys, mentionUserLimit } from '../utils/consts/remindSetting';
import * as param from '../utils/consts/noticeInputParam';

export class noticeRegisterValidate extends validateBase {

  validateSettings(settings: string[]): void {
    let length: number = Object.keys(settingKeys).length;
    let defaultSettings: string[] = new Array(length).fill('0');
    if (JSON.stringify(defaultSettings) === JSON.stringify(settings)) {
      let msg: string = '通知頻度を設定してください。';
      this.setError(param.month, msg);
      this.setError(param.day, msg);
      this.setError(param.hour, msg);
    }
  }

  validateMentionUsers(mentionUsers: string[]): void {
    let length: number = Object.keys(mentionUsers).length;
    if (length > mentionUserLimit) {
      this.setError(param.mentionUsers, 'メンション先の設定は10個まで設定できます。');
    }
  }
}
