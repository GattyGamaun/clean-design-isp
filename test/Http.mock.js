const { APP_CONFIG_URL, CONNECTION_CONFIG_URL } = require('../src/constants')

const mockRequestsMap = new Map([
    [
        APP_CONFIG_URL, 
        { 
            displayName: 'ISP Task',
            displayVersion: '0.42',
            displayBy: 'Author'
        }
    ],
    [
        CONNECTION_CONFIG_URL, 
        { 
            url: 'localhost',
            login: 'ISP',
            secret: 'ISP@secret!'
        }
    ],
]);

module.exports = class HttpMock {
    get(url) {
        return Promise.resolve(mockRequestsMap.get(url));
    }
}
