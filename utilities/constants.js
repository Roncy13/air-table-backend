const SECONDS = {
  MIN: 3,
  MAX: 8,
};
const REGEX = {
  folders: './folder*',
  jsFiles: (folder) => `${folder}/*.js`,
};

exports.SECONDS = SECONDS;
exports.REGEX = REGEX;
