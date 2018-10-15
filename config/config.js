module.exports = {
    port: 8000,
    proxy: {
            '/api': {target: 'http://www.test.com'}
        }
}