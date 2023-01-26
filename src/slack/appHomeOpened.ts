import { app } from '../services/slackService';
import * as noticeService from '../services/noticeService';
const appHome = require("../view/appHome");

module.exports = app.event("app_home_opened", async ({ event, context, payload }) => {
  try {
    let userId = event.user;
    let teamId = event.view.team_id;
    let taskList = await noticeService.getTaskList(userId, teamId);

    const result = await app.client.apiCall("views.publish", {
      token: context.botToken,
      user_id: event.user,
      view: await appHome(taskList)
    });
  } catch (e) {
    console.log(e);
    app.error(e);
  }
});
