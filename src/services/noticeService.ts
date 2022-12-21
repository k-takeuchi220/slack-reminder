import * as noticeModel from '../models/noticeModel';

export async function register(
  userIds,
  message,
  settings,
): Promise<void> {
  let result = await noticeModel.register(userIds, message, settings);
}
