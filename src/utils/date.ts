import dayjs from 'dayjs';
import * as settingsConst from './consts/remindSetting';

export function now(): dayjs.Dayjs {
  return dayjs();
}

export function getNextNoticedAt(dateStr: Date, settings: Array<string>): dayjs.Dayjs {
  let date = dayjs(dateStr);
  settings.forEach(function (value, index) {
    if (value !== settingsConst.defaultValue) {
      date = calcDateSettings(date, index, value);
    }
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
    [settingsConst.keys.hour]: 'h',
    [settingsConst.keys.day]: 'd',
    [settingsConst.keys.month]: 'M',
    [settingsConst.keys.year]: 'y',
  }
  if (!settingsUnitList[settingKey]) {
    return date;
  }

  let unit: dayjs.ManipulateType = settingsUnitList[settingKey];
  return date.add(addNum, unit);;
}
