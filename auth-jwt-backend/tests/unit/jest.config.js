const { resolve } = require('path');
const root = resolve(__dirname, '../..');
const rootConfig = require(`${root}/jest.config.js`);

module.exports = {
  ...rootConfig,
  rootDir: root,
  collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  displayName: { name: 'UNIT-TESTS', color: 'green' },
  testMatch: ['<rootDir>/tests/unit/**/*.test.ts'],
};
