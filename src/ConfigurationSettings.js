const Http = require('./thirdparty/Http');
const { APP_CONFIG_URL, CONNECTION_CONFIG_URL } = require('./constants');

module.exports = class ConfigurationSettings {
    constructor(http = new Http()) {
        this.http = http;
    }

    async fetchConfiguration() {
        const [appConfig, connectionConfig] = await Promise.all([
            this.http.get(APP_CONFIG_URL),
            this.http.get(CONNECTION_CONFIG_URL)
        ]);

        return {
            app: appConfig,
            connection: connectionConfig
        };
    }
}
