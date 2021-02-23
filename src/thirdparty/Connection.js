module.exports = class Connection {
    open(url, login, password) {
        return new Promise((resolve) => resolve({
            info: 'Connected'
        }));
    }
}
