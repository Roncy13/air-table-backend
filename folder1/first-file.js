const { ExecuteFn } = require('./../utilities/functions');

async function FirstFunction(payload, result) {
  return ExecuteFn(payload, result);
}

async function SecondFunction(payload, result) {
  return ExecuteFn(payload, result);
}

async function ThirdFunction(payload, result) {
  return ExecuteFn(payload, result);
}

module.exports = {
  FirstFunction,
  SecondFunction,
  ThirdFunction,
};
