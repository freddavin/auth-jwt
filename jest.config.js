const { resolve } = require('path');

const root = resolve(__dirname);

module.exports = {
  rootDir: root,
  verbose: true,
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
};
