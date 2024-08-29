module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
    },
    transformIgnorePatterns: [
      "/node_modules/(?!(my-module|another-module)/)"
    ],
  };
  