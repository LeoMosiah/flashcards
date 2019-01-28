module.exports = {
  preset: "jest-expo",
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  setupFilesAfterEnv: ["<rootDir>/__tests__/setup.js"],
  testMatch: ["<rootDir>/**/*.test.js?(x)"],
  modulePaths: ["<rootDir>/"]
};
