const assert = require('assert');
const AppInfo = require('../src/AppInfo');
const ConfigurationSettings = require('../src/ConfigurationSettings');
const HttpMock = require('./Http.mock');

describe('AppInfo', () => {
    let appInfo;

    before(() => {
        const config = new ConfigurationSettings(new HttpMock());
        appInfo = new AppInfo(config);
    });

    it('should return formatted app info', async () => {
        const result = await appInfo.getInfo();
        assert.strictEqual(result, 'ISP Task v. 0.42 by Author');
    });
});
