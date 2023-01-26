const { App } = require('@slack/bolt');

export const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

export async function getChannelId(userId: string): Promise<string> {
  try {
    const result = await app.client.apiCall("conversations.open", {
      token: process.env.SLACK_BOT_TOKEN,
      users: userId,
    });
    return result.channel.id;
  } catch (e) {
    console.log(e);
    app.error(e);
  }
}

export async function getUsersInfo(userId: string): Promise<any> {
  try {
    const result = await app.client.apiCall("users.info", {
      token: process.env.SLACK_BOT_TOKEN,
      user: userId,
    });
    return result;
  } catch (e) {
    console.log(e);
    app.error(e);
  }
}

export async function getUserName(userId: string): Promise<string> {
  // TODO: cache
  const result = await getUsersInfo(userId);
  if (!result) {
    return '';
  }
  return result.user.name;
}
