module.exports = {
  rootDir: '.',
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    './e2e/init.ts'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js']
}