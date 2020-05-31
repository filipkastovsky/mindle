module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
    testEnvironment: 'node',
    setupFiles: ['<rootDir>/tests/setupTests.js'],
};
