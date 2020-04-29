$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/orangehrm/resources/featurefile/contactsales.feature");
formatter.feature({
  "line": 1,
  "name": "Contact Sales functionality",
  "description": "As a user I want to submit contact details in orangehrm",
  "id": "contact-sales-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15594841400,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should submit contact details successfully",
  "description": "",
  "id": "contact-sales-functionality;user-should-submit-contact-details-successfully",
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
  "name": "I click on contact sales button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should navigate to contact sales page",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactSalesStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 315811300,
  "status": "passed"
});
formatter.match({
  "location": "ContactSalesStepdefs.iClickOnContactContactSalesButton()"
});
formatter.result({
  "duration": 1707869700,
  "status": "passed"
});
formatter.match({
  "location": "ContactSalesStepdefs.iShouldNavigateToContactSalesPage()"
});
formatter.result({
  "duration": 65500,
  "status": "passed"
});
formatter.after({
  "duration": 849553200,
  "status": "passed"
});
formatter.before({
  "duration": 14687845100,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User should submit contact details successfully",
  "description": "",
  "id": "contact-sales-functionality;user-should-submit-contact-details-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on contact sales button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter first name \"Nikita\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter last name \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter company name \"ACB Ltd.\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select number employees \"151 - 200\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter phone number \"07777888899\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter job title \"QA Tester\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \"abcdefg123@yahoo.co.uk\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select country name \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter comment \"None\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactSalesStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 36600,
  "status": "passed"
});
formatter.match({
  "location": "ContactSalesStepdefs.iClickOnContactContactSalesButton()"
});
formatter.result({
  "duration": 1672896200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikita",
      "offset": 20
    }
  ],
  "location": "ContactSalesStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 2116438800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "ContactSalesStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 388393800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACB Ltd.",
      "offset": 22
    }
  ],
  "location": "ContactSalesStepdefs.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 461169100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "151 - 200",
      "offset": 27
    }
  ],
  "location": "ContactSalesStepdefs.iSelectNumberEmployees(String)"
});
formatter.result({
  "duration": 565722000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07777888899",
      "offset": 22
    }
  ],
  "location": "ContactSalesStepdefs.iEnterPhoneNumber(String)"
});
formatter.result({
  "duration": 416022800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA Tester",
      "offset": 19
    }
  ],
  "location": "ContactSalesStepdefs.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 420513700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdefg123@yahoo.co.uk",
      "offset": 9
    }
  ],
  "location": "ContactSalesStepdefs.iEnter(String)"
});
formatter.result({
  "duration": 603038600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 23
    }
  ],
  "location": "ContactSalesStepdefs.iSelectCountryName(String)"
});
formatter.result({
  "duration": 485840700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "None",
      "offset": 17
    }
  ],
  "location": "ContactSalesStepdefs.iEnterComment(String)"
});
formatter.result({
  "duration": 310404300,
  "status": "passed"
});
formatter.after({
  "duration": 786744200,
  "status": "passed"
});
});