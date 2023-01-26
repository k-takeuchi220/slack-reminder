import { app } from './services/slackService';
const openModalClicked = require("./slack/openModalClicked");
const noticeRegister = require("./slack/noticeRegister");
const appHomeOpened = require("./slack/appHomeOpened");

openModalClicked();
noticeRegister();
appHomeOpened();

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3001);

  console.log('⚡️ Bolt app is running!');

})();
