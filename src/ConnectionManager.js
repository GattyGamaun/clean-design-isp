const Connection = require('./thirdparty/Connection');
const { CONNECTION_CONFIG_URL } = require('./constants');

module.exports = class ConnectionManager {
    constructor(settings, connection = new Connection()) {
        this.settings = settings;
        this.connection = connection;
    }

    async createConnection() {
        const { url, login, secret } = await this.settings.fetchConfiguration(CONNECTION_CONFIG_URL);
        await this.connection.open(url, login, secret);
        return  `Connected to ${url} with ${login}<${secret}>`;
    }
}
