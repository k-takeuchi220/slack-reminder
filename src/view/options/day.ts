const { format } = require('util')
import { optionFormat } from '../../utils/consts/viewFormat';

const start = 0;
const end = 31;
const initialValue = start;

export function getOptions() {
  let options = [];
  for (let i = start; i <= end; ++i) {
    let json = format(optionFormat, i, i);
    options.push(JSON.parse(json));
  }
  return options;
}

export function getInitialOption() {
  return JSON.parse(format(optionFormat, initialValue, initialValue));
}
