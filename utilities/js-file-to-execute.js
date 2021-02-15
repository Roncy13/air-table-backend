const { SECONDS, ExecuteFn } = require('./constants');

function _firstFunction(data, result) {
  const name = arguments.callee.name;
  const payload = { data, name, result };
  return new Promise((resolve, reject) => setTimeout(resolve, 3000));
}

function _secondFunction(data, result) {
  const name = arguments.callee.name;
  const payload = { data, name, result };
  return new Promise((resolve, reject) => setTimeout(resolve, 3000));
}

function _thirdFunction(data, result) {
  const name = arguments.callee.name;
  const payload = { data, name, result };
  return new Promise((resolve, reject) => setTimeout(resolve, 3000));
}

module.exports = {
  _firstFunction,
  _secondFunction,
  _thirdFunction,
};
