module.exports = {
  rootDir: '.',
  preset: 'jest-expo',
  transform: {
    '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)'
  ],
  testRegex: '(/src/.*.test)\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/**/*.{ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  globals: {
    'ts-jest': {
      babelConfig: {
        presets: ['babel-preset-expo'],
        plugins: ['@babel/transform-react-jsx-source']
      }
    }
  }
};
