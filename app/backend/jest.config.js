module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './reports/jest',
        outputName: 'jest-test-results.xml',
      },
    ],
  ],
};
