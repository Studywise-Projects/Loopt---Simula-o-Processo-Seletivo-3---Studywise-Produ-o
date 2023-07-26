module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest"
  }
}