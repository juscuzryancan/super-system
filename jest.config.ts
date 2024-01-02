import * as path from 'path';

export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
    '@/(.*)$': '<rootDir>/src/$1',
  },
  moduleDirectories: [
    'node_modules',
    __dirname,
    path.join('test'),
    path.join('src'),
  ],
  setupFiles: ['<rootDir>/jest.polyfills.ts'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testEnvironmentOptions: {
    /**
     * @note Opt-out from JSDOM using browser-sc
     * tyle resolution
     * for dependencies. This is simply incorrect, as JSDOM is
     * not a browser, and loading browser-oriented bundles in
     * Node.js will break things.
     *
     * Consider migrating to a more modern test runner if you
     * don't want to deal with this.
     */
    customExportConditions: [''],
  },
};
