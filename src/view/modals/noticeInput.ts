import * as month from "../options/month";
import * as day from "../options/day";
import * as hour from "../options/hour";
import * as param from '../../utils/consts/noticeInputParam';

module.exports = () => {
  return {
    "type": "modal",
    "callback_id": "notice_register",
    "title": {
      "type": "plain_text",
      "text": "定期リマインダー",
      "emoji": true
    },
    "submit": {
      "type": "plain_text",
      "text": "登録",
      "emoji": true
    },
    "close": {
      "type": "plain_text",
      "text": "キャンセル",
      "emoji": true
    },
    "blocks": [
      {
        "type": "header",
        "text": {
          "type": "plain_text",
          "text": "通知内容の設定",
          "emoji": true
        }
      },
      {
        "type": "input",
        "block_id": param.mentionUsers,
        "element": {
          "type": "multi_users_select",
          "action_id": "content",
          "placeholder": {
            "type": "plain_text",
            "text": "ユーザーを選択",
            "emoji": true
          },
        },
        "label": {
          "type": "plain_text",
          "text": "メンション先ユーザー（複数登録可）",
          "emoji": true
        }
      },
      {
        "type": "input",
        "block_id": param.message,
        "element": {
          "action_id": "content",
          "type": "plain_text_input",
          "multiline": true,
        },
        "label": {
          "type": "plain_text",
          "text": "通知メッセージ",
          "emoji": true
        }
      },
      {
        "type": "header",
        "text": {
          "type": "plain_text",
          "text": "通知頻度の設定",
          "emoji": true
        }
      },
      {
        "type": "input",
        "block_id": param.month,
        "element": {
          "action_id": "content",
          "type": "static_select",
          "placeholder": {
            "type": "plain_text",
            "text": "Select options",
            "emoji": true
          },
          "initial_option": month.getInitialOption(),
          "options": month.getOptions(),
        },
        "label": {
          "type": "plain_text",
          "text": "単位：月",
          "emoji": true
        }
      },
      {
        "type": "input",
        "block_id": param.day,
        "element": {
          "action_id": "content",
          "type": "static_select",
          "placeholder": {
            "type": "plain_text",
            "text": "Select options",
            "emoji": true
          },
          "initial_option": day.getInitialOption(),
          "options": day.getOptions(),
        },
        "label": {
          "type": "plain_text",
          "text": "単位：日",
          "emoji": true
        }
      },
      {
        "type": "input",
        "block_id": param.hour,
        "element": {
          "action_id": "content",
          "type": "static_select",
          "placeholder": {
            "type": "plain_text",
            "text": "Select options",
            "emoji": true
          },
          "initial_option": hour.getInitialOption(),
          "options": hour.getOptions(),
        },
        "label": {
          "type": "plain_text",
          "text": "単位：時間",
          "emoji": true
        }
      }
    ]
  }
};
