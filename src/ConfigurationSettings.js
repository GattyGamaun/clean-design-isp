module.exports = class ConfigurationSettings {
    constructor(http) {
        this.http = http;
    }

    async fetchConfiguration(url) {
        return await Promise.resolve(this.http.get(url));
    }
}
