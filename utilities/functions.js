const { SECONDS } = require('./constants');
const moment = require('moment');

function Sleep(millis = SECONDS) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

function DateDiff(startingDate, endingDate) {
  return moment(endingDate).diff(startingDate, 'seconds');
}

function DateFormatToTime(date) {
  return moment(date).format('hh:mm:ss A');
}

const ExecuteFn = async ({ data, name, result }, resolve) =>
  setTimeout(() => {
    console.log({ data, name, result });
    result.push({ data, name });
    return resolve(result);
  }, SECONDS);

module.exports = {
  Sleep,
  ExecuteFn,
  DateDiff,
  DateFormatToTime,
};
