const { APP_CONFIG_URL } = require('./constants');

module.exports = class AppInfo {
    constructor(settings) {
        this.settings = settings;
    }

    async getInfo() {
        const app = await this.settings.fetchConfiguration(APP_CONFIG_URL);
        return `${app.displayName} v. ${app.displayVersion} by ${app.displayBy}`;
    }
}
