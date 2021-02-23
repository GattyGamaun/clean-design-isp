module.exports = class AppInfo {
    constructor(configurationSettings) {
        this.configurationSettings = configurationSettings;
    }

    async getInfo() {
        const { app } = await this.configurationSettings.fetchConfiguration();
        return `${app.displayName} v. ${app.displayVersion} by ${app.displayBy}`;
    }
}
