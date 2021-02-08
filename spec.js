// spec.js
//describe('turo Demo App', function() {
//    it('should have a title', function() {
//        browser.get('https://turo.com/login');
//        expect(browser.getTitle()).toEqual('Turo');

//    });
//});
// spec.js
// spec.js
// adding a comment

var chai = require('chai');
chai.use(require('chai-smoothie'));
var expect = chai.expect;
var until = protractor.until;


describe('Protractor Demo App', function() {
    var userName = element(by.id('username'));
    var password = element(by.id('password'));
    var submitBtn = element(by.id('submit'));
    var logOut = element(by.linkText('.jslogoutLink.subNavList.link'));
    var accountDropdown = element(by.css('.js-navSubMenuToggle'));
    // var latestResult = element(by.binding('latest'));

    beforeEach(function() {
        browser.get('https://turo.com/login');
    });

    //it('should have a title', function() {
        // var title = browser.getTitle();
        // expect(browser.getTitle()).to.include('Turo');
     //   expect(element(by.css('h4'))).to.eventually.have.text('Welcome back')
    //});

    it('should login', function() {
        userName.sendKeys('josh.sellers@turo.com');
        password.sendKeys('firerootlife');

        submitBtn.click();
        //expect(browser.).to.include('')

        // expect(latestResult.getText()).toEqual('3');
    });

    it('should logout', function () {
        browser.ignoreSynchronization = true;
        userName.sendKeys('josh.sellers@turo.com');
        password.sendKeys('firerootlife');
        submitBtn.click();
        browser.wait(until.elementIsVisible(accountDropdown), 5000).then(function(accountDropdown) {
            accountDropdown.click();
        });
        logOut.click();
    })
});