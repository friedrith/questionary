module.exports = {
  "collectCoverageFrom": [
    "src/frontend/**/*.{js,jsx,mjs}"
  ],
  "setupFiles": [
    "<rootDir>/config/polyfills.js"
  ],
  "testMatch": [
    "<rootDir>/src/frontend/**/__tests__/**/*.{js,jsx,mjs}",
    "<rootDir>/src/frontend/**/?(*.)(spec|test).{js,jsx,mjs}"
  ],
  "testEnvironment": "node",
  "testURL": "http://localhost",
  "transform": {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"
  ],
  "moduleNameMapper": {
    "^react-native$": "react-native-web"
  },
  "moduleFileExtensions": [
    "web.js",
    "mjs",
    "js",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ]
}
