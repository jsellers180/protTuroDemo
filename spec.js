// spec.js
//describe('turo Demo App', function() {
//    it('should have a title', function() {
//        browser.get('https://turo.com/login');
//        expect(browser.getTitle()).toEqual('Turo');

//    });
//});
// spec.js
// spec.js

var expect = require('chai').expect;

describe('Protractor Demo App', function() {
    var userName = element(by.id('username'));
    var password = element(by.id('password'));
    var submitBtn = element(by.id('submit'));
    // var latestResult = element(by.binding('latest'));

    beforeEach(function() {
        browser.get('https://turo.com/login');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Turo');
    });

    it('should login', function() {
        userName.sendKeys('josh.sellers@turo.com');
        password.sendKeys('firerootlife');

        submitBtn.click();
        //expect(browser.).to.have('')

        // expect(latestResult.getText()).toEqual('3');
    });
});