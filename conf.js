// conf.js
exports.config = {
    framework: 'mocha',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    onPrepare: function() {
        browser.ignoreSynchronization = true;
    },
    multiCapabilities: [{
        // browserName: 'firefox'}, {
        browserName: 'chrome'
    }]
};
