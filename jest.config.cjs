// import http from 'http';
// import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = {
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform : {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    testPathIgnore : [
        "/src", "/tests/noauto"
    ]
    // setupFilesAfterEnv: ['./jest.setup.js'],
    // globals : {
    //     HOST : "http://localhost:8888"
    // }
};