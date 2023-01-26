import { app } from '../services/slackService';
import * as param from '../utils/consts/noticeInputParam';
import { noticeRegisterValidate } from '../validation/noticeRegisterValidate';
import * as noticeService from '../services/noticeService';

module.exports = app.view('notice_register', async ({ ack, body, view }) => {
  try {
    let values = view['state']['values'];

    let mentionUsers: string[] = values[param.mentionUsers]['content']['selected_users'];
    let message: string = values[param.message]['content']['value'];
    let month: string = values[param.month]['content']['selected_option']['value'];
    let day: string = values[param.day]['content']['selected_option']['value'];
    let hour: string = values[param.hour]['content']['selected_option']['value'];

    let userId: string = body['user']['id'];
    let teamId: string = body['user']['team_id'];
    let settings: string[] = [month, day, hour];

    let validate = new noticeRegisterValidate();
    validate.validateSettings(settings);

    ack(validate.errorInfo());

    noticeService.register(
      userId,
      mentionUsers,
      message,
      teamId,
      settings
    );

  } catch (e) {
    console.log(e);
    app.error(e);
  }
});
