import { app } from '../services/slackService';
const noticeModal = require("../view/modals/noticeInput");

module.exports = app.action("open_modal_clicked", async ({ ack, body, context }) => {
  ack();

  try {
    const result = await app.client.views.open({
      token: context.botToken,
      trigger_id: body.trigger_id,
      view: noticeModal()
    });
  } catch (e) {
    console.log(e);
    app.error(e);
  }
});
