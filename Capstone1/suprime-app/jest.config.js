module.exports = {
  transform: {
    '^.+\\(t|j)sx?$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(spec|test).js'],
  transformIgnorePatterns: [`/node_modules/(?!(sip\.js))`],
}
