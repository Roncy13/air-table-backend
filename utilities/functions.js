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
      `${
        result.logs.length + 1
      }. Executing ${fn} at ${startExecute} with ${seconds} seconds delay`
    );

    return setTimeout(() => {
      const endTime = new Date();
      const endExecute = DateFormatToTime(endTime);
      const dateDiff = DateDiff(startTime, endTime);
      const baseLog = `${fn} runs at ${startExecute} and ends in ${endExecute} with ${dateDiff} seconds difference`;
      const logDetails = `----- Details of: ${fn} ------ \n`;
      const dateDiffLog = `    Date difference in seconds: ${dateDiff}`;
      const timeDiffLog = `    Time start executed: ${startExecute}, Time end execution: ${endExecute}`;

      console.log(baseLog);
      console.log(logDetails);
      console.log(dateDiffLog);
      console.log(timeDiffLog);

      const addExecutionTime = result.executionTime + dateDiff;
      const totalExecLog = `    Total Seconds before execution: ${result.executionTime}s,  Total Seconds after execution: ${addExecutionTime}s \n`;

      console.log(totalExecLog);

      result.executionTime = addExecutionTime;
      result.logs.push(
        [baseLog, logDetails, dateDiffLog, timeDiffLog, totalExecLog].join('\n')
      );
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
