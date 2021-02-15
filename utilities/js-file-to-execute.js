const { SECONDS } = require('./constants');
const { DateFormatToTime, DateDiff, ExecuteFn } = require('./functions');

function _firstFunction({ filename, folder, name }, result) {
  return new Promise((resolve) => {
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
}

function _secondFunction({ filename, folder, name }, result) {
  return new Promise((resolve) => {
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
}

function _thirdFunction({ filename, folder, name }, result) {
  return new Promise((resolve) => {
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
}

module.exports = {
  _firstFunction,
  _secondFunction,
  _thirdFunction,
};
