const { REGEX } = require('./utilities/constants');
const glob = require('glob-promise');
const { DateFormatToTime } = require('./utilities/functions');

const data = new Date();
const result = {
  counter: 0,
  logs: [],
  executionTime: 0,
};

function getFilename(file) {
  const arrFile = file.split('/');
  return arrFile.pop();
}

async function executeFn(folder, file) {
  const jsFn = require(file);
  const filename = getFilename(file);
  const keyFns = Object.keys(jsFn);

  console.log(`Starting Executing of Functions at ${DateFormatToTime(data)}`);

  for (const keyFn of keyFns) {
    const payload = { filename, folder, name: keyFn };
    result.counter = result.counter + 1;
    await jsFn[keyFn](payload, result);
  }

  console.log(result);

  console.log(`End Executing of Functions at ${DateFormatToTime(new Date())}`);
}

async function readFiles(folder) {
  const filesDir = REGEX.jsFiles(folder);
  const jsFiles = await glob(filesDir);

  for (const file of jsFiles) {
    await executeFn(folder, file);
  }
}

async function readDirectories(getData) {
  await getData.forEach(readFiles);
}

async function index() {
  const dataReadDir = await glob(REGEX.folders);

  await readDirectories(dataReadDir);
}

index();
