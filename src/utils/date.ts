import dayjs from 'dayjs';
import { settingKeys } from './consts/remindSetting';

export function now(): dayjs.Dayjs {
  return dayjs();
}

export function getNextNoticedAt(dateStr: Date, settings: string[]): dayjs.Dayjs {
  let date = dayjs(dateStr);
  settings.forEach(function (value, index) {
    date = calcDateSettings(date, index, value);
  });

  return date;
}

function calcDateSettings(
  date: dayjs.Dayjs,
  settingKey: number,
  settingValue: string
): dayjs.Dayjs {
  let addNum: number = Number(settingValue);
  let settingsUnitList: { [index: number]: dayjs.ManipulateType } = {
    [settingKeys.hour]: 'h',
    [settingKeys.day]: 'd',
    [settingKeys.month]: 'M',
  }
  if (!settingsUnitList[settingKey]) {
    return date;
  }

  let unit: dayjs.ManipulateType = settingsUnitList[settingKey];
  return date.add(addNum, unit);;
}
