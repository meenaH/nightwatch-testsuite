module.exports = {
  'Zuora Login Test' : function (client) {
    client
      .url('https://apisandbox.zuora.com/apps/newlogin.do')
      .waitForElementVisible('body', 'loginPage')
      .assert.title('Zuora,Inc.')//Google
      .assert.visible('input[type=text]') //input[type=text]
      .setValue('input[type=text]', 'meena.haque@tesglobal.com_newsandbox')
      .setValue('input[type=password]', 'Eatcakes123!')
      // .pause(2000)
      .click('.btn-login')
      .pause(2000)
      //.waitForElementVisible('body', 5000)
      .assert.title('Z-Billing','homePage')
      //.end();
  }
};

