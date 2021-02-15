const { SECONDS } = require('./constants');
const moment = require('moment');

function DateDiff(startingDate, endingDate) {
  return moment(endingDate).diff(startingDate, 'seconds');
}

function DateFormatToTime(date) {
  return moment(date).format('hh:mm:ss A');
}

const ExecuteFn = async ({ filename, folder, name }, result) =>
  new Promise((resolve) => {
    const startTime = new Date();
    const startExecute = DateFormatToTime(startTime);
    const fn = `${folder} -> ${filename} -> ${name}`;
    console.log(`${result.counter}. Executing ${fn} at ${startExecute}`);

    return setTimeout(() => {
      const endTime = new Date();
      const endExecute = DateFormatToTime(endTime);
      const dateDiff = DateDiff(startTime, endTime);
      const log = `${fn} runs at ${startExecute} and ends in ${endExecute} with ${dateDiff} seconds difference`;

      result.executionTime = result.executionTime + dateDiff;
      result.logs.push(log);

      console.log(
        `  ${fn} ended at ${endExecute} with ${dateDiff} seconds difference`
      );

      return resolve();
    }, SECONDS);
  });

module.exports = {
  ExecuteFn,
  DateDiff,
  DateFormatToTime,
};
