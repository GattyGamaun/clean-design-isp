module.exports = class Http {
    get(url) {
        return new Promise((resolve) => resolve(`Data from ${url}`));
    }
}
