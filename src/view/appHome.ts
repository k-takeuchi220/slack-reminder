import { taskManager } from "../manager/taskManager";
import * as slackService from '../services/slackService';
import { settingKeys } from '../utils/consts/remindSetting';

const { format } = require('util');

module.exports = async function (taskList: taskManager[] = []) {
  return {
    type: "home",
    callback_id: "home_view",
    title: {
      type: "plain_text",
      text: "Modal"
    },
    blocks: await generateRegisterListBlock(taskList)
  };
};

class blocks {
  _blocks: string[] = [];
  _default = `
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "このアプリでは、定期的に特定のユーザーにメッセージを通知することができます。"
      },
      "accessory": {
        "type": "button",
        "action_id": "open_modal_clicked",
        "text": {
          "type": "plain_text",
          "text": "登録"
        }
      }
    }`;

  constructor() {
    this._blocks.push(JSON.parse(divider));
    this._blocks.push(JSON.parse(this._default));
  }

  addBlock(block: string) {
    this._blocks.push(block)
  }

  getBlocks(): string[] {
    return this._blocks;
  }
}

const textFormat = `
    {
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": "通知先:\\n %s\\n\\n通知間隔:\\n%i月, %i日, %i時間\\n\\n内容:\\n%s",
				"emoji": true
			}
		}`;

const registerCountFormat = `
    {
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*現在の登録件数は、 %i 件です。*"
			}
		}`;

const divider = `
    {
			"type": "divider"
		}`;

async function generateRegisterListBlock(taskList: taskManager[]) {
  let retBlocks = new blocks();
  retBlocks.addBlock(JSON.parse(format(registerCountFormat, Object.keys(taskList).length)));
  retBlocks.addBlock(JSON.parse(divider));

  for (const key in taskList) {
    let userIds: string[] = taskList[key].getUserIds();
    console.log('!!', userIds);
    let userNames: string[] = await getUserNames(userIds);
    let settings: number[] = taskList[key].getSettings();
    let message: string = taskList[key].getMessage().replace(/\n/g, '\\n');

    let jsonStr = format(
      textFormat,
      userNames.join(' '),
      settings[settingKeys.month],
      settings[settingKeys.day],
      settings[settingKeys.hour],
      message
    );

    retBlocks.addBlock(JSON.parse(jsonStr));
    retBlocks.addBlock(JSON.parse(divider));
  }

  return retBlocks.getBlocks();
}

async function getUserNames(userIds: string[]): Promise<string[]> {
  let names: string[] = [];
  for (const userId of userIds) {
    let name = await slackService.getUserName(userId);
    if (name) {
      names.push('@' + name);
    }
  }

  console.log('K', names);
  return names;
}
