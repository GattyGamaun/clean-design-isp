const assert = require('assert');
const ConnectionManager = require('../src/ConnectionManager');
const ConfigurationSettings = require('../src/ConfigurationSettings');
const HttpMock = require('./Http.mock');

describe('ConnectionManager', () => {
    let connectionManager;

    before(() => {
        const config = new ConfigurationSettings(new HttpMock());
        connectionManager = new ConnectionManager(config);
    });

    it('should return formatted connection info', async () => {
        const result = await connectionManager.createConnection();
        assert.strictEqual(result, 'Connected to localhost with ISP<ISP@secret!>');
    });
});
