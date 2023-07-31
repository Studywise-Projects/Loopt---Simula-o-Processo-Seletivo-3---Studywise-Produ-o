module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.scss$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.(scss|css)$': '<rootDir>/styleStub.js',
  },
}