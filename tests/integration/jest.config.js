const { resolve } = require('path');
const root = resolve(__dirname, '../..');
const rootConfig = require(`${root}/jest.config.js`);

module.exports = {
  ...rootConfig,
  rootDir: root,
  collectCoverage: false,
  displayName: { name: 'INTEGRATION-TESTS', color: 'purple' },
  testMatch: ['<rootDir>/tests/integration/**/*.test.ts'],
  setupFilesAfterEnv: ['<rootDir>/tests/integration/jest.setup.ts'],
};
