module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.[tj]sx?$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/(?!(axios|formik|yup|@mui|swr)/)'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '@/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
