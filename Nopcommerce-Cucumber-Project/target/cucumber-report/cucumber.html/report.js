$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/books.feature");
formatter.feature({
  "line": 2,
  "name": "Books functionality",
  "description": "As a user I want to register into NopCommerceWebsite",
  "id": "books-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Books"
    }
  ]
});
formatter.before({
  "duration": 12435602500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to registration page successfully",
  "description": "",
  "id": "books-functionality;user-should-navigate-to-registration-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 78566300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1587699000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 1226700,
  "status": "passed"
});
formatter.after({
  "duration": 703718000,
  "status": "passed"
});
formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/computers.feature");
formatter.feature({
  "line": 1,
  "name": "Computers functionality",
  "description": "As a user I want add product to the shopping cart",
  "id": "computers-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11125015900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to computers page successfully",
  "description": "",
  "id": "computers-functionality;user-should-navigate-to-computers-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to computers page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 28200,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1402023600,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iShouldNavigateToComputersPageSuccessfully()"
});
formatter.result({
  "duration": 18200,
  "status": "passed"
});
formatter.after({
  "duration": 698513200,
  "status": "passed"
});
formatter.before({
  "duration": 11170760400,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User should add product to the cart successfully",
  "description": "",
  "id": "computers-functionality;user-should-add-product-to-the-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I mouse hover on desktop and click",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on hdd radio button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on add to cart button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 27200,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1303294000,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iMouseHoverOnDesktopAndClick()"
});
formatter.result({
  "duration": 1336098600,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iClickOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 20127375100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[@class\u003d\u0027product-title\u0027]//a[contains(text(),\u0027Build your own computer\u0027)]\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-1C73H3FG\u0027, ip: \u0027192.168.0.46\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\nikit\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56272}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5b2ff37537b714655afaba5a4bb42def\n*** Element info: {Using\u003dxpath, value\u003d//h2[@class\u003d\u0027product-title\u0027]//a[contains(text(),\u0027Build your own computer\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.demo.nopcommerce.utility.Utility.clickOnElement(Utility.java:37)\r\n\tat com.demo.nopcommerce.pages.ComputersPage.clickOnBuildYourOwnComputer(ComputersPage.java:38)\r\n\tat com.demo.nopcommerce.cucumber.stepdef.ComputersStepdefs.iClickOnBuildYourOwnComputer(ComputersStepdefs.java:26)\r\n\tat ✽.And I click on build your own computer(src/test/java/com/demo/nopcommerce/resources/featurefile/computers.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ComputersStepdefs.iClickOnHddRadioButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputersStepdefs.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1261109800,
  "status": "passed"
});
formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature",
  "description": "As a user I want to login into nope commerce website",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 11258947500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-feature;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 38500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1407696400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 106819700,
  "status": "passed"
});
formatter.after({
  "duration": 662600000,
  "status": "passed"
});
formatter.before({
  "duration": 11190274500,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"xyz13@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 25900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 636426600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz13@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 238491700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 143657600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 11802885100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 362500,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.demo.nopcommerce.cucumber.stepdef.LoginStepdefs.iShouldLoginSuccessfully(LoginStepdefs.java:45)\r\n\tat ✽.Then I should login successfully(src/test/java/com/demo/nopcommerce/resources/featurefile/login.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1252587800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-feature;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter email \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see the error message \"\u003cerrMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "login-feature;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errMsg"
      ],
      "line": 26,
      "id": "login-feature;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "abc123@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect"
      ],
      "line": 27,
      "id": "login-feature;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "dfgsd@gmail.com",
        "djljl1234",
        "Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect"
      ],
      "line": 28,
      "id": "login-feature;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "ldjg@gmial.com",
        "srougoe",
        "Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect"
      ],
      "line": 29,
      "id": "login-feature;verify-the-error-message-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10405816700,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-feature;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 17,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter email \"abc123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 50000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1368989900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 183959400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 147311800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1322686000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect",
      "offset": 32
    }
  ],
  "location": "LoginStepdefs.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 98002100,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...rrors and try again.[\n]The credentials prov...\u003e but was:\u003c...rrors and try again.[]The credentials prov...\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.demo.nopcommerce.cucumber.stepdef.LoginStepdefs.iShouldSeeTheErrorMessage(LoginStepdefs.java:50)\r\n\tat ✽.Then I should see the error message \"Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect\"(src/test/java/com/demo/nopcommerce/resources/featurefile/login.feature:24)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1069420000,
  "status": "passed"
});
formatter.before({
  "duration": 11088798700,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-feature;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 17,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter email \"dfgsd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"djljl1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 47200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1427999300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dfgsd@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 164622300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "djljl1234",
      "offset": 18
    }
  ],
  "location": "LoginStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 154832100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1338907700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect",
      "offset": 32
    }
  ],
  "location": "LoginStepdefs.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 97863600,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...rrors and try again.[\nNo customer account found]\u003e but was:\u003c...rrors and try again.[The credentials provided are incorrect]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.demo.nopcommerce.cucumber.stepdef.LoginStepdefs.iShouldSeeTheErrorMessage(LoginStepdefs.java:50)\r\n\tat ✽.Then I should see the error message \"Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect\"(src/test/java/com/demo/nopcommerce/resources/featurefile/login.feature:24)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1080935900,
  "status": "passed"
});
formatter.before({
  "duration": 11188696600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-feature;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 17,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter email \"ldjg@gmial.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"srougoe\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 41100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 648852800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ldjg@gmial.com",
      "offset": 15
    }
  ],
  "location": "LoginStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 191954900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "srougoe",
      "offset": 18
    }
  ],
  "location": "LoginStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 137711200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1348034800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect",
      "offset": 32
    }
  ],
  "location": "LoginStepdefs.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 116091000,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...rrors and try again.[\nNo customer account found]\u003e but was:\u003c...rrors and try again.[The credentials provided are incorrect]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.demo.nopcommerce.cucumber.stepdef.LoginStepdefs.iShouldSeeTheErrorMessage(LoginStepdefs.java:50)\r\n\tat ✽.Then I should see the error message \"Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect\"(src/test/java/com/demo/nopcommerce/resources/featurefile/login.feature:24)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1027734500,
  "status": "passed"
});
formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/registration.feature");
formatter.feature({
  "line": 2,
  "name": "Registration functionality",
  "description": "As a user I want to register into NopCommerceWebsite",
  "id": "registration-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Register"
    }
  ]
});
formatter.before({
  "duration": 10983765100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to registration page successfully",
  "description": "",
  "id": "registration-functionality;user-should-navigate-to-registration-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 48500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1373663600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 14200,
  "status": "passed"
});
formatter.after({
  "duration": 644121000,
  "status": "passed"
});
});