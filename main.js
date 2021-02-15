const glob = require('glob-promise');
const { REGEX } = require('./utilities/constants');
const { DateFormatToTime, DateDiff } = require('./utilities/functions');

// main objects

const data = new Date();
const result = {
  executionTime: 0,
  logs: [],
};

function getLastPathName(file) {
  const arrFile = file.split('/');
  return arrFile.pop();
}

function reviewExecutionLogs(logs) {
  console.log(`---------- Result Log History ------------ \n`);

  logs.forEach((log) => console.log(log));

  console.log(`---------- Result Log History ------------ \n`);
}

function reviewExecution() {
  const endTime = new Date();
  const { logs, executionTime } = result;

  console.log(`Starting Time: ${DateFormatToTime(data)}`);
  console.log(`Ending Time: ${DateFormatToTime(endTime)}`);
  console.log(`Date Difference in Seconds: ${DateDiff(data, endTime)} \n`);

  // comment our for log storage showing purposes only
  // reviewExecutionLogs(logs);

  console.log(`---------- Result Log Summary ------------ \n`);

  console.log(
    `Text Exam runs with ${logs.length} function/s executed lasted for ${executionTime} seconds \n`
  );

  console.log(`---------- Result Log Summary ------------ \n`);
}

async function executeFn(folder, file) {
  const jsFn = require(file);
  const filename = getLastPathName(file);
  const keyFns = Object.keys(jsFn);

  for (const keyFn of keyFns) {
    const payload = { filename, folder: getLastPathName(folder), name: keyFn };

    await jsFn[keyFn](payload, result);
  }
}

async function readFiles(folder) {
  const filesDir = REGEX.jsFiles(folder);
  const jsFiles = await glob(filesDir);

  for (const file of jsFiles) {
    await executeFn(folder, file);
  }
}

async function readDirectories(folders) {
  for (const folder of folders) {
    await readFiles(folder);
  }
}

async function index() {
  const dataReadDir = await glob(REGEX.folders);
  console.log(
    `\n Starting Executing of Functions at ${DateFormatToTime(data)} \n`
  );

  await readDirectories(dataReadDir);

  reviewExecution();
}

index();
