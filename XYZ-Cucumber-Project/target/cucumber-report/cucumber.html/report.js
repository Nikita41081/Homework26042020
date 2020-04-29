$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/bank/resources/featurefile/bankmanager.feature");
formatter.feature({
  "line": 1,
  "name": "Bank manager feature",
  "description": "As a user I want to check bank manager functionality on xyz bank website",
  "id": "bank-manager-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12743194200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Bank manager should add customer successfully",
  "description": "",
  "id": "bank-manager-feature;bank-manager-should-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on bank manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter first name \"Nikita\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter last name \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter post code \"LU1 1NR\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see customer added successfully message",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 114004000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 179018400,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 375874800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikita",
      "offset": 20
    }
  ],
  "location": "BankManagerStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 327239400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "BankManagerStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 162804900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LU1 1NR",
      "offset": 19
    }
  ],
  "location": "BankManagerStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 180387000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 185928800,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : Customer added successfully with customer id :6}\n  (Session info: chrome\u003d81.0.4044.122): Customer added successfully with customer id :6\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-1C73H3FG\u0027, ip: \u0027192.168.0.46\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\nikit\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57132}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c576a69915896023ad34c1e2133aad3a\n*** Element info: {Using\u003dxpath, value\u003d//form[@name\u003d\u0027myForm\u0027]//button[contains(text(),\u0027Add Customer\u0027)]}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.toString(Unknown Source)\r\n\tat com.bank.pages.AddCustomerPage.clickOnAddCustomerBt(AddCustomerPage.java:48)\r\n\tat com.bank.cucumber.stepdefs.BankManagerStepdefs.iClickOnAddCustomerButton(BankManagerStepdefs.java:49)\r\n\tat ✽.And I click on add customer button(src/test/java/com/bank/resources/featurefile/bankmanager.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BankManagerStepdefs.iShouldSeeCustomerAddedSuccessfullyMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1206794300,
  "status": "passed"
});
formatter.before({
  "duration": 10755195800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Bank manager should delete customer successfully",
  "description": "",
  "id": "bank-manager-feature;bank-manager-should-delete-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on bank manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on customers tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I search customer by name \"Nikita Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on delete button",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 1005100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 628022700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iClickOnCustomersTab()"
});
formatter.result({
  "duration": 261372800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikita Patel",
      "offset": 27
    }
  ],
  "location": "BankManagerStepdefs.iSearchCustomerByName(String)"
});
formatter.result({
  "duration": 412547600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerStepdefs.iClickOnDeleteButton()"
});
formatter.result({
  "duration": 20121551600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[contains(text(),\u0027Delete\u0027)]\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-1C73H3FG\u0027, ip: \u0027192.168.0.46\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\nikit\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57181}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e340c7ef6a32e1b4e8b3fb2d0d9b1506\n*** Element info: {Using\u003dxpath, value\u003d//button[contains(text(),\u0027Delete\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.bank.utility.Utility.clickOnElement(Utility.java:36)\r\n\tat com.bank.pages.CustomersPage.deleteCustomer(CustomersPage.java:30)\r\n\tat com.bank.cucumber.stepdefs.BankManagerStepdefs.iClickOnDeleteButton(BankManagerStepdefs.java:73)\r\n\tat ✽.Then I click on delete button(src/test/java/com/bank/resources/featurefile/bankmanager.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1075967900,
  "status": "passed"
});
formatter.uri("src/test/java/com/bank/resources/featurefile/customer.feature");
formatter.feature({
  "line": 2,
  "name": "Customer page feature",
  "description": "As a user I customer page functionality on xyz bank website",
  "id": "customer-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Customer"
    }
  ]
});
formatter.before({
  "duration": 10616932300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Customer should login and logout successfully",
  "description": "",
  "id": "customer-page-feature;customer-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on customer login tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select customer name \"Nikita Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify logout button is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see your name lable is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 785900,
  "status": "passed"
});
formatter.match({
  "location": "CustomerStepdefs.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 623364200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikita Patel",
      "offset": 24
    }
  ],
  "location": "CustomerStepdefs.iSelectCustomerName(String)"
});
