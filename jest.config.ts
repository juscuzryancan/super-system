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
    '@/components/ui/(.*)$':'<rootDir>/src/components/ui/$1',
    '@/lib/(.*)$':'<rootDir>/src/lib/$1'
  },
  moduleDirectories: [
    'node_modules',
    __dirname,
    path.join('test'),
    path.join('src'),
  ],
};
