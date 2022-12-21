const { App } = require('@slack/bolt');
import * as noticeSrv from './services/noticeService';

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// penpen(app);

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3001);

  console.log('⚡️ Bolt app is running!');

  noticeSrv.register("test, aaaa", 'hello world', ["3", "*", "*", "*"]);
})();
