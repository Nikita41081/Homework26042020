$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/org/wcht/resources/featurefile/accessability.feature");
formatter.feature({
  "line": 1,
  "name": "Accessibility functionality",
  "description": "As a user I want to access accessibility page of Wcht website",
  "id": "accessibility-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 26802404500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should access accessibility page",
  "description": "",
  "id": "accessibility-functionality;user-should-access-accessibility-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on close tab of customer information",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click on accessibility link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to accessibility page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AccessibilityStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 130883600,
  "status": "passed"
});
formatter.match({
  "location": "AccessibilityStepdefs.iClickOnCloseTabOfCustomerInformation()"
});
formatter.result({
  "duration": 297440800,
  "status": "passed"
});
formatter.match({
  "location": "AccessibilityStepdefs.iClickOnAccessibilityLink()"
});
formatter.result({
  "duration": 3552943500,
  "status": "passed"
});
formatter.match({
  "location": "AccessibilityStepdefs.iShouldNavigateToAccessibilityPageSuccessfully()"
});
formatter.result({
  "duration": 29200,
  "status": "passed"
});
formatter.after({
  "duration": 911055200,
  "status": "passed"
});
formatter.before({
  "duration": 23246394600,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User should navigate to get involved page",
  "description": "",
  "id": "accessibility-functionality;user-should-navigate-to-get-involved-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on close tab of customer information",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on accessibility link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I mouse hover on your community tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I mouse hover on get involved and click",
  "keyword": "Then "
});
formatter.match({
  "location": "AccessibilityStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 202300,
  "status": "passed"
});
formatter.match({
  "location": "AccessibilityStepdefs.iClickOnCloseTabOfCustomerInformation()"
});
formatter.result({
  "duration": 1940593100,
  "status": "passed"
});
formatter.match({
  "location": "AccessibilityStepdefs.iClickOnAccessibilityLink()"
});
formatter.result({
  "duration": 3464870800,
  "status": "passed"
});
formatter.match({
  "location": "AccessibilityStepdefs.iMouseHoverOnYourCommunityTab()"
});
formatter.result({
  "duration": 1287794100,
  "status": "passed"
});
formatter.match({
  "location": "AccessibilityStepdefs.iMouseHoverOnGetInvolvedAndClick()"
});
formatter.result({
  "duration": 20166593000,
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-1C73H3FG\u0027, ip: \u0027192.168.0.46\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:332)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\r\n\tat java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:608)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:595)\r\n\tat uk.org.wcht.utility.Utility.mouseHoverToElement(Utility.java:80)\r\n\tat uk.org.wcht.pages.AccessibilityPage.mouseHoverOnGetInvolvedAndClick(AccessibilityPage.java:32)\r\n\tat uk.org.wcht.cucumber.stepdefs.AccessibilityStepdefs.iMouseHoverOnGetInvolvedAndClick(AccessibilityStepdefs.java:36)\r\n\tat ✽.Then I mouse hover on get involved and click(src/test/java/uk/org/wcht/resources/featurefile/accessability.feature:14)\r\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-1C73H3FG\u0027, ip: \u0027192.168.0.46\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:279)\r\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:44)\r\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\t\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:595)\r\n\t\tat uk.org.wcht.utility.Utility.mouseHoverToElement(Utility.java:80)\r\n\t\tat uk.org.wcht.pages.AccessibilityPage.mouseHoverOnGetInvolvedAndClick(AccessibilityPage.java:32)\r\n\t\tat uk.org.wcht.cucumber.stepdefs.AccessibilityStepdefs.iMouseHoverOnGetInvolvedAndClick(AccessibilityStepdefs.java:36)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\t\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\t\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\t\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\t\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\t\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\t\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\t\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\t\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\t\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\t\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\t\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\t\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\t\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\t\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\t\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\t\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:328)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\r\n\tat java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:608)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:595)\r\n\tat uk.org.wcht.utility.Utility.mouseHoverToElement(Utility.java:80)\r\n\tat uk.org.wcht.pages.AccessibilityPage.mouseHoverOnGetInvolvedAndClick(AccessibilityPage.java:32)\r\n\tat uk.org.wcht.cucumber.stepdefs.AccessibilityStepdefs.iMouseHoverOnGetInvolvedAndClick(AccessibilityStepdefs.java:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"ul[@class\u003d\u0027header__sub-nav js-sub-nav\u0027]//a[contains(text(),\u0027Get involved\u0027)]\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-1C73H3FG\u0027, ip: \u0027192.168.0.46\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\nikit\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56932}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 8aa83f5de4db773d4decaa92e14622c1\n*** Element info: {Using\u003dxpath, value\u003dul[@class\u003d\u0027header__sub-nav js-sub-nav\u0027]//a[contains(text(),\u0027Get involved\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:204)\r\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:155)\r\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:75)\r\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:84)\r\n\t... 66 more\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1683862100,
  "status": "passed"
});
});