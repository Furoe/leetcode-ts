const { pathsToModuleNameMapper}  = require('ts-jest')
const {compilerOptions} = require('./tsconfig.json')

module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!src/**/*.d.ts'
  ],
  transform: {
    '^.+\\.(ts|js)$': 'ts-jest'
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/'}),
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json'
    }
  }
}