module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,jsx}",
    "<rootDir>/src/**/*.vue",
    "!**/node_modules/**",
  ],
  coverageDirectory: "<rootDir>/tests/reports",
  coverageReporters: ["html", "text-summary"],
  setupFiles: ["<rootDir>/tests/jest.setup.js"],
};
