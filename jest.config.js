module.exports = {
  collectCoverage: true,
  // on node 14.x coverage provider v8 offers good speed and more or less good report
  coverageProvider: 'v8',
  moduleDirectories: ["node_modules", "<rootDir>"],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
  ],
  // roots: ["<rootDir>", "<rootDir>/node_modules/next/dist/build/jest"],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
 
    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/node_modules/next/dist/build/jest/__mocks__/styleMock.js',
 
    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$': `<rootDir>/node_modules/next/dist/build/jest/__mocks__/fileMock.js`,
 
    // Handle module aliases
    // '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/(.*)$': '<rootDir>/$1',
 
    // Handle @next/font
    '@next/font/(.*)': `<rootDir>/node_modules/next/dist/build/jest/__mocks__/nextFontMock.js`,
    // Handle next/font
    'next/font/(.*)': `<rootDir>/node_modules/next/dist/build/jest/__mocks__/nextFontMock.js`,
    // Disable server-only
    'server-only': `<rootDir>/node_modules/next/dist/build/jest/__mocks__/empty.js`,
    // Add module alias mappings to match `tsconfig.json`
    // "^@/components/(.*)$": "<rootDir>/components/$1",
    // "^@/components$": "<rootDir>/components",
    // "^@/interfaces/(.*)$": "<rootDir>/interfaces/$1",
    // "^@/interfaces$": "<rootDir>/interfaces",
    // "^@/pages/(.*)$": "<rootDir>/pages/$1",
    // "^@/pages$": "<rootDir>/pages",
    // "^@/styles/(.*)$": "<rootDir>/styles/$1",
    // "^@/styles$": "<rootDir>/styles",
  },
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: [
    // "<rootDir>/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/**/mytest.{spec,test}.{js,jsx,ts,tsx}",
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    // '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    '^.+\\.(js|jsx|ts|tsx)$': require("path").resolve(__dirname, "./babel-transformer.js"),
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
}