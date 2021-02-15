const {
  SECONDS: { MIN, MAX },
} = require('./constants');
const moment = require('moment');

function DateDiff(startingDate, endingDate) {
  return moment(endingDate).diff(startingDate, 'seconds');
}

function DateFormatToTime(date) {
  return moment(date).format('hh:mm:ss A');
}

const ExecuteFn = async ({ filename, folder, name }, result, resolve) =>
  new Promise((resolve) => {
    const startTime = new Date();
    const startExecute = DateFormatToTime(startTime);
    const fn = `${folder} -> ${filename} -> ${name}`;
    const seconds = RandomSeconds();

    console.log(
      `${result.counter}. Executing ${fn} at ${startExecute} with ${seconds} seconds delay`
    );

    return setTimeout(() => {
      const endTime = new Date();
      const endExecute = DateFormatToTime(endTime);
      const dateDiff = DateDiff(startTime, endTime);
      const log = `${fn} runs at ${startExecute} and ends in ${endExecute} with ${dateDiff} seconds difference`;
      const addExecutionTime = result.executionTime + dateDiff;

      console.log(`----- Details of: ${fn} ------ \n`);
      console.log(`    Date difference in seconds: ${dateDiff}`);
      console.log(
        `    Time start executed: ${startExecute}, Time end execution: ${endExecute}`
      );
      console.log(
        `    Total Seconds before execution: ${result.executionTime},  Total Seconds after execution: ${addExecutionTime} \n`
      );

      result.executionTime = addExecutionTime;
      result.logs.push(log);
      return resolve();
    }, seconds);
  });

function RandomSeconds(min = MIN, max = MAX) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r) * 1000;
}

module.exports = {
  ExecuteFn,
  DateDiff,
  DateFormatToTime,
};
