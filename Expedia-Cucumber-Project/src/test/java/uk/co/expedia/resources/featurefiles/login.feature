Feature: Login Functionality

  As a user, I want to Log into Expedia website
  Scenario: User should log in successfully with valid credentials
    Given I am on Home Page
    When I click on Accounts Tab
    And I click on Sign In Tab
    And Enter Email ID "nikita41081@yahoo.com"
    And Enter Password "abcd1234XYZ"
    And I click on Sign In Button
    Then I should be inside my Named Account Page