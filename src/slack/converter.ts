import { keys } from '../utils/consts/remindSetting';

export function getMentionUsers(bodyText: string): Array<string> {
  const pattern: RegExp = /(?<=@)[^ ]*/g;

  return bodyText.match(pattern);
}

export function getMessage(bodyText: string): string {
  const pattern: RegExp = /@[^ ]* /g;
  return bodyText.replace(pattern, '').split(' ').slice(5).join(' ');
}

export function getSettings(bodyText: string): Array<string> {
  const pattern: RegExp = /@[^ ]* /g;
  let length = Object.keys(keys).length;
  return bodyText.replace(pattern, '').split(' ').slice(0, length);
}
