const Connection = require('./thirdparty/Connection');

module.exports = class ConnectionManager {
    constructor(configurationSettings, connection = new Connection()) {
        this.configurationSettings = configurationSettings;
        this.connection = connection;
    }

    async createConnection() {
        const { connection: { url, login, secret }} = await this.configurationSettings.fetchConfiguration();
        await this.connection.open(url, login, secret);
        return  `Connected to ${url} with ${login}<${secret}>`;
    }
}
